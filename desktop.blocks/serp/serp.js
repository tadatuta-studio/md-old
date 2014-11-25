BEM.DOM.decl('serp', {
    onSetMod : {
        js : {
            inited : function() {
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

    add : function() {
        if(this.hasMod('pending')) return;

        var _this = this;

        this.setMod('pending', 'yes');

        $.ajax({
            url : '/desktop.blocks/serp/data.json',
            type : 'GET'
        })
            .always(function() {
                _this.delMod('pending');
            })
            .done(function(data) {
                BEM.DOM.before(_this.findElem('more'), BEMHTML.apply(data.map(function(snippetData) {
                    return BEM.DOM.blocks.snippet.getBlockBemjson(snippetData);
                })));
            });
    }
}, {
    live : function() {
        this.liveBindTo('more', 'click', function() {
            this.add();
        });

        return false;
    }
});
