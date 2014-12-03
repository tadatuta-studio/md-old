BEM.DOM.decl('serp', {
    onSetMod : {
        js : {
            inited : function() {
                if(!this.params.source) return;

                var _this = this,
                    $this = this.domElem,
                    top = $this.offset().top,
                    maxScrollPageNumber = this.params.maxScrollPageNumber || 0,
                    serpAutoLoadingPaddingBottom = this.params.autoLoadingPaddingBottom || 200,
                    isBottom;

                this._itemsPerPage = this.params.itemsPerPage || this._itemsPerPage;

                this._onScroll = function() {
                    var height = $this.outerHeight(true),
                        scrollTop = window.scrollY,
                        windowHeight = $(window).height();

                    // автоподгрузка по скролу указанного в maxScrollPageNumber кол-ва страниц
                    // в случае, когда в блоке еще есть свобоное место и нет скрола - догружать без учета лимита
                    if(_this._lastPage % maxScrollPageNumber !== 0) {
                        // проверка на прокрутку вниз с запасом
                        if(scrollTop + windowHeight + serpAutoLoadingPaddingBottom > top + height) {
                            // проверка на вход в зону автоподгрузки (serpAutoLoadingPaddingBottom)
                            if(!isBottom) _this.add();
                        } else {
                            isBottom = false;
                        }
                    }
                };

                $(window).bind('scroll', $.throttle(this._onScroll, 100));

                this.add();
            }
        },

        pending : function(modName, modVal) {
            if(modVal) {
                this.findElem('more').remove();
                this._addSpinner();
            } else {
                this.findElem('spinner').remove();
                this._addMoreBtn();
            }
        }
    },

    _itemsPerPage : 10,
    _lastPage : 0,
    // общее кол-во документов в БД
    _total : undefined,
    // кол-во загруженных документов
    _loaded : 0,

    _addMoreBtn : function() {
        BEM.DOM.append(this.domElem, BEMHTML.apply({
            block : 'serp',
            elem : 'more',
            content : 'More schools'
        }));
    },

    _addSpinner : function() {
        BEM.DOM.append(this.domElem, BEMHTML.apply({
            block : 'serp',
            elem : 'spinner'
        }));
    },

    _add : function(data) {
        BEM.DOM.before(this.findElem('more'), BEMHTML.apply(data.map(function(snippetData) {
            return BEM.DOM.blocks.snippet.getBlockBemjson(snippetData);
        })));

        return this;
    },

    // TODO: в случае перехода на серверную ручку с пагинацией - переписать данный метод
    _getData : (function() {
        var _cache = {};

        return function(url) {
            var _this = this,
                numberOfLoaded = this._lastPage * this._itemsPerPage,
                request = _cache[url] ?
                    new $.Deferred() :
                    $.ajax({ url : url, type : 'GET' }),
                defer = new $.Deferred();

            if (!_cache[url]) request.done(function(res) { _cache[url] = res; });
            else request.resolve(_cache[url]);

            request
                .done(function(res) {
                    defer.resolve($.extend({}, res, {
                        data : res.data.slice(numberOfLoaded, numberOfLoaded + _this._itemsPerPage)
                    }));
                })
                .fail(function() { defer.reject.apply(defer, arguments); });

            return defer.promise();
        };
    }()),

    add : function() {
        // если ожидается ответ от сервера
        if(this.hasMod('pending')) return;
        // если загрузили все данные
        if(this._total !== undefined && this._total === this._loaded) return;

        this.setMod('pending', 'yes');

        var _this = this,
            request = this._getData(this.params.source);

        request
            .always(function() {
                _this.delMod('pending');
            })
            .done(function(res) {
                _this._total = _this._total || res.total;
                _this._loaded += res.data.length;
                _this._lastPage += 1;

                _this._add(res.data);

                // если новых данных больше не будет
                if(_this._total !== undefined && _this._total === _this._loaded) {
                    // удалить кнопку подгрузки новых данных
                    _this.findElem('more').remove();
                } else {
                    _this._onScroll();
                }
            });

        return request;
    }
}, {
    live : function() {
        this.liveBindTo('more', 'click', function() {
            this.add();
        });

        return false;
    }
});
