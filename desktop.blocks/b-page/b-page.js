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
});

BEM.DOM.decl({ block: 'b-page', modName: 'page', modVal: 'landing' },
{
    onSetMod: {
        'js': function() {
            var landingImage = this.findBlockInside('landing-image').domElem;

            landingImage.width() >= 898 && this.setMod('width', 'fullsize');

            this.bindToWin('resize', function() {
                landingImage.width() >= 898 ? this.setMod('width', 'fullsize') : this.delMod('width');
            });
        }
    }
});

BEM.DOM.decl({ block: 'b-page', modName: 'page', modVal: 'landing2' },
{
    onSetMod: {
        'js': function() {
            var win = BEM.DOM.win,
                winHeight = win.height(),
                FOLD_LINE_Y = 915;

            if (navigator.userAgent.indexOf('Edge') > -1) {
                $('html').addClass('edge');
            }

            winHeight < FOLD_LINE_Y && win.scrollTop(FOLD_LINE_Y - winHeight);
        }
    }
});
