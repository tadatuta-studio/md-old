BEM.DOM.decl('dropdown',
{
    onSetMod: {
        'visibility': {
            'visible': function() {
                this.afterCurrentEvent(function() {
                    this.bindToDoc('click', this.hide);
                });
            },
            '': function() {
                this.unbindFromDoc('click', this.hide);
            }
        }
    },
    toggle: function() {
        this.toggleMod('visibility', 'visible');

        return this;
    },
    hide: function() {
        this.delMod('visibility');

        return this;
    }
});