BEM.DOM.decl({ block: 'b-carousel', modName: 'auto', modVal: 'yes' },
{
    onSetMod: {
        'js': function() {
            this.__base();
            this.start();
        }
    }
});