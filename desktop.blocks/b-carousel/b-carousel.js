(function() {
    var tick = 0;

    BEM.DOM.decl('b-carousel',
    {
        onSetMod: {
            'js': function() {
                var _this = this,
                    popupa = this.findBlockOutside('b-page').findBlockInside({ block: 'popupa', modName: 'type', modVal: 'video-md8' });

                this.bindTo(this.elem('play'), 'click', function() {
                    popupa.show();
                });

                this.bindTo(this.elem('button'), 'click', function(e) {
                    var button = e.data.domElem;

                    this.stop();

                    this.to(this.elem('button').index(button));
                });

                //BEM.blocks['slide'].on(this.domElem, 'imgclick', this.next, this);
            }
        },
        go: function(type, next) {
            var _this = this,
                type = type || 'next',
                slides = this.elem('item'),
                active = this.elem('item', 'state', 'active') || (this.setMod(slides.eq(0), 'state', 'active') && slides.eq(0)),
                next = next || active[type](),
                direction = type == 'next' ? 'left' : 'right',
                fallback  = type == 'next' ? 'first' : 'last',
                multiplier = type == 'next' ? -1 : 1;

            next = next.length ? next : slides[fallback]();

            if (this.hasMod(next, 'state') || this._inProgress) return;
            this._inProgress = true;

            this.setMod(next, 'pos', type);
            next[0].offsetWidth; // force reflow
            this.setMod(active, 'direction', direction);
            this.setMod(next, 'direction', direction);

            $.browser.msie && $.browser.version < 10 && next.css({ left: -1 * multiplier * 100 + '%' }).animate({ left: 0 }, 500, function() {
                next[0].offsetWidth; // force reflow
            });

            active.animate({ left: multiplier * 100 + '%' }, 500, function() {
                var wasActive = active;
                _this
                    .delMod(next, 'pos')
                    .delMod(next, 'direction')
                    .setMod(next, 'state', 'active')
                    .delMod(active, 'state')
                    .delMod(active, 'direction')
                    .trigger('change', { direction: direction });

                wasActive.css('left', '');

                _this.delMod(_this.elem('button'), 'state');
                _this.setMod(_this.elem('button').eq(slides.index(next)), 'state', 'active');
                _this._inProgress = false;
            });

            return this;
        },
        to: function(idx) {
            var _this = this,
                slides = this.elem('item'),
                active = this.findElem('item', 'state', 'active') || (this.setMod(slides.eq(0), 'state', 'active') && slides.eq(0)),
                activeIdx = slides.index(active);

            if (idx > (slides.length - 1) || idx < 0) return;
            if (activeIdx == idx) return;

            return this.go(idx > activeIdx ? 'next' : 'prev', slides.eq(idx));
        },
        prev: function() {
            this.go('prev');

            return this;
        },
        next: function() {
            this.go('next');

            return this;
        },
        start: function() {
            var _this = this;

            BEM.channel('sys').on('tick', _this._onTick, _this);

            return this;
        },
        stop: function() {
            var _this = this;
            BEM.channel('sys').un('tick', _this._onTick, _this);

            return this;
        },
        _onTick: function() {
            tick++;
            if (tick > 150) {
                this.next();
                tick = 0;
            }
        }
    });
})();
