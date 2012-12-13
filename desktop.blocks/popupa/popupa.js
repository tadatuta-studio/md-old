BEM.DOM.decl('popupa',
{
    onSetMod: {
        'js': function() {
            this.bindTo(this.elem('close'), 'click', this.hide);
        }
    },
    show: function() {
        this.setMod('visibility', 'visible');

        return this;
    },
    hide: function() {
        this.delMod('visibility');

        return this;
    },
    toggle: function() {
        this.toggleMod('visibility', 'visible');

        return this;
    }
});