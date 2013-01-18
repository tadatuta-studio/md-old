BEM.DOM.decl({ block: 'b-page', modName: 'page', modVal: 'index' },
{
    onSetMod: {
        'js': function() {
            BEM.DOM.win.width() < 1050 ? this.setMod('width', 'small') : this.delMod('width');

            this.bindToWin('resize', function() {
                BEM.DOM.win.width() < 1050 ? this.setMod('width', 'small') : this.delMod('width');
            });
        }
    }
})