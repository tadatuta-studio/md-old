BEM.DOM.decl('landing-screens',
{
    onSetMod: {
        js: {
            inited: function() {
                var bPage = this.findBlockOutside('b-page'),
                    popupa = bPage.findBlockInside('popupa'),
                    carousel = popupa.findBlockInside('carousel');

                carousel.pause();

                this.bindTo('item', 'click', function(e) {
                    var item = e.data.domElem,
                        pos = item.index(),
                        winHeight = BEM.DOM.win.height();

                    // this.trigger('show', { pos: pos });

                    carousel.elem('img').height(winHeight / 1.2);

                    carousel.to(pos);
                    popupa.show();

                    var popupaInner = popupa.elem('inner'),
                        popupaInnerHeight = popupaInner.height(),
                        popupaInnerWidth = popupaInner.width();

                    popupa.elem('inner').css({ 'margin-top': -1 * popupaInnerHeight / 2 + 'px', 'margin-left': -1 * popupaInnerWidth / 2 + 'px' });

                    this._cycling || carousel.cycle();
                    this._cycling = true;
                });
            }
        }
    }
});