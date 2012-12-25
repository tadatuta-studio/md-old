BEM.DOM.decl('slider',
{
    onSetMod: {
        'js': function() {
            var _this = this,
                buttons = this.elem('button');

            this.bindTo(buttons, 'click', function(e) {
                var currentButton = e.data.domElem,
                    currentIdx = buttons.index(currentButton);

                this.go(currentIdx);
            });

            // bind to Play button to show video popup
            var popupa = this.findBlockOutside('b-page').findBlockInside({ block: 'popupa', modName: 'type', modVal: 'video-md8' });
            this.bindTo(this.elem('play'), 'click', function() {
                popupa.show();
            });

            this.tick = 0;
            BEM.channel('sys').on('tick', _this._onTick, _this);
        }
    },
    go: function(idx) {
        var _this = this,
            buttons = this.elem('button'),
            currentButton = buttons.eq(idx),
            items = this.elem('item'),
            oldItem = this.elem('item', 'state', 'active'),
            oldIdx = items.index(oldItem),
            currentItem = items.eq(idx),
            description = this.elem('description');

        this.tick = 0;

        if (oldIdx === idx) return;

        oldItem.stop();
        description.stop();

        this.delMod(buttons, 'state');
        this.setMod(currentButton, 'state', 'active');

        _this.setMod(currentItem, 'pos', 'next');

        oldItem.fadeOut(600, function() {
            _this.delMod(oldItem, 'state');
            oldItem.css('display', '');
            _this.delMod(currentItem, 'pos');
            _this.setMod(currentItem, 'state', 'active');
        });

        description
            .css('padding-left', '30px')
            .animate({ paddingLeft: '0' }, 700);

    },
    next: function() {
        var buttons = this.elem('button'),
            currentButton = this.elem('button', 'state', 'active'),
            currentIdx = buttons.index(currentButton);

        this.go(currentIdx + 1 < buttons.length ? currentIdx + 1 : 0);
    },
    _onTick: function() {
        this.tick++;
        this.tick > 150 && this.next();
    }
});