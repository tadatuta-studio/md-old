BEM.DOM.decl('landing-demo', {
    onSetMod: {
        js: {
            inited: function() {
                // клик в любом месте блока
                this.bindTo(this.elem('mask', 'view', 'windows').add(this.elem('hint', 'target', 'md')), 'click', function() {
                    // переход из windows в magic-desktop
                    this.setMod('view', 'magic-desktop');
                });
                // клик по активным областям
                this.bindTo(this.elem('hotspot'), 'click', function(e) {
                    // имя целевого попапа
                    var relativeTargetName = this.getMod($(e.currentTarget).parent(), 'action'),
                        // dom нода целевого попапа
                        relativeTarget = (relativeTargetName && this.elem('popup', 'type', relativeTargetName)) || null;

                    // скрыть подсказку по клику на любой хотспот
                    this.setMod(this.elem('hint', 'target', 'windows'), 'hidden', 'yes');

                    // если существует связанный с хотспотом попап
                    if ( relativeTarget ) {
                        if ( relativeTargetName === 'personalization' ) {
                            // кастомное попведение для хотспота 'personalization': показать попап
                            // и не останавливать всплытие события

                            this.delMod(relativeTarget, 'hidden');
                        } else {
                            // для всех остальных хотспотов: остановить всплытие и toggle видимости

                            e.preventDefault();
                            this.toggleMod(relativeTarget, 'hidden', 'yes');
                        }
                    }
                });
                // клик по попапам
                this.bindTo(this.elem('popup'), 'click', function(e) {
                    this.setMod($(e.currentTarget), 'hidden', 'yes');
                });
                // клик по хостпоту кнопки 'toggle' - показать/скрыть боковое меню
                this.bindTo(this.findElem(this.elem('btn', 'action', 'toggle'), 'hotspot'), 'click', function() {
                    this.toggleMod(this.elem('panel', 'side', 'left'), 'hidden', 'yes');
                });
                // клик по хостпоту кнопки 'exit-md' - возврат в windows
                this.bindTo(this.findElem(this.elem('btn', 'action', 'exit-md'), 'hotspot'), 'click', function() {
                    this.setMod('view', 'windows');
                });
            }
        },

        view: {
            'windows': function(modName, modVal) {
                // удалить фокус с попапов
                this.delMod(this.findElem('popup', 'focused', 'yes'), 'focused');
                // закрыть все попапы
                this.setMod(this.elem('popup'), 'hidden', 'yes');

                // скрыть/показать соответствующие подсказки
                this.delMod(this.elem('hint', 'target', 'md'), 'hidden');

                this.setMod(this.elem('mask'), modName, modVal);
                this._transitionEffect(true);
            },
            'magic-desktop': function(modName, modVal) {
                // развернуть бокову панель
                this.delMod(this.elem('panel', 'side', 'left'), 'hidden');

                // скрыть/показать соответствующие подсказки
                this.setMod(this.elem('hint', 'target', 'md'), 'hidden', 'yes');
                this.delMod(this.elem('hint', 'target', 'windows'), 'hidden');

                this.setMod(this.elem('mask'), modName, modVal);
                this._transitionEffect();
            }
        }
    },
    onElemSetMod: {
        popup: {
            hidden: function(elem, modName, modVal) {
                // пеерместить фокус(влияет на z-index) на последний открытый попап
                // закрыть предыдущие открытые попапы
                if ( !modVal ) {
                    this.delMod(this.findElem('popup', 'focused', 'yes'), 'focused');
                    this.setMod(this.findElem('popup'), 'hidden', 'yes');

                    this.delMod(elem, 'hidden');
                    this.setMod(elem, 'focused', 'yes');
                } else {
                    // удалять фокус с закрытого попапа
                    this.delMod(elem, 'focused');
                }
            }
        },
        hint: {
            hidden: function(elem, modName, modVal) {
                // плавное показывание подсказки для windows
                if(this.getMod(elem, 'target') === 'md' && !modVal) elem.stop().css({ opacity: 0 }).delay(300).animate({ opacity: 1 }, 750);
            }
        }
    },

    _transitionEffect: function(isShowMode) {
        var t = this,
            config = {
                count: 8,
                effectDuration: 300,
                transitionDuration: 750
            },
            src = t.elem('mask').css({ backgroundImage: '' }).css('background-image').replace(/.*?url\((.+?)\).*/, '$1'),
            itemWidth = t.elem('mask').width() / config.count,
            itemHeight = t.elem('mask').height() / config.count,
            delayKoef = (config.transitionDuration - config.effectDuration) / (config.count * 2 - 1),
            items = $();

        for ( var j = 0; j < config.count; j += 1 ) {
            for ( var i = 0; i < config.count; i += 1 ) {
                var item = $('<div></div>');

                items = items.add(item);

                item.css({
                    background: 'url(' + src + ') ' + (-i * itemWidth) + 'px ' + (-j * itemHeight) + 'px no-repeat',
                    position: 'absolute',
                    left: i * itemWidth + 'px',
                    top: j * itemHeight + 'px',
                    width: itemWidth + 'px',
                    height: itemHeight + 'px',
                    opacity: !!isShowMode ? 0 : 1
                });
            }
        }

        t.elem('mask').append(items);

        // задержка на reflow
        setTimeout(function() {
            t.elem('mask').css({ background: 'none' }).show();

            items.each(function(index) {
                var col = index % config.count,
                    row = (index -  col) / config.count;

                $(this).delay((config.count - row + col) * delayKoef)
                    .transitionDuration({ opacity: !!isShowMode ? 1 : 0 }, config.effectDuration);
            });

            t.elem('mask').delay(config.transitionDuration)[!!isShowMode ? 'show' : 'hide'](0, function() {
                t.elem('mask').css({ backgroundImage: '' }).html('');
            });
        }, 250);
    }
});
