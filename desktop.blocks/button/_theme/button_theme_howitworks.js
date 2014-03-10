BEM.DOM.decl({ block: 'button', modName: 'theme', modVal: 'howitworks' }, {
    onSetMod: {
        js: {
            inited: function() {
                this.on('click', function() {
                    this
                        .findBlockOutside('b-page')
                        .findBlockInside('landing-steps')
                        .domElem.show();
                });
            }
        }
    }
})
