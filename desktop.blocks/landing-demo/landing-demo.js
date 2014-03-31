BEM.DOM.decl('landing-demo', {
    onSetMod: {
        'js': {
            'inited': function() {
                this.bindTo('click', function() {
                    (function(t) {
                         var config = {
                                 count: 8,
                                 effectDuration: 300,
                                 transitionDuration: 750
                             },
                             src = t.elem('mask').css('background-image').replace(/.*?url\((.+?)\).*/, '$1'),
                             itemWidth = t.elem('mask').width() / config.count,
                             itemHeight = t.elem('mask').height() / config.count,
                             delayKoef = (config.transitionDuration - config.effectDuration) / (config.count * 2 - 1),
                             items = $();

                        for ( var j = 0; j < config.count; j += 1 ) {
                            for ( var i = 0; i < config.count; i += 1 ) {
                                var item = $('<div></div>');

                                items = items.add(item);

                                item.css({
                                    background: 'url(' + src + ') ' + (-i * itemWidth) + 'px ' + (-j * itemHeight) + 'px no-repeat',
                                    position: 'absolute',
                                    left: i * itemWidth + 'px',
                                    top: j * itemHeight + 'px',
                                    width: itemWidth + 'px',
                                    height: itemHeight + 'px'
                                });
                            }
                        }

                        t.elem('mask').append(items);

                        // задержка на reflow
                        setTimeout(function() {
                            t.elem('mask').css({ background: 'none' });

                            items.each(function(index) {
                                var col = index % config.count,
                                    row = (index -  col) / config.count;

                                $(this).delay((config.count - row + col) * delayKoef)
                                    .transition({ opacity: 0 }, config.effectDuration);
                            });

                            t.elem('mask').delay(config.transitionDuration).hide(0);
                        }, 250);
                    }(this));

                    this.setMod('view', 'magic-desktop');

                    this.unbindFrom('click');
                });

                this.bindTo(this.elem('btn'), 'click', function(e) {
                    var relativeTargetName = this.getMod($(e.target), 'action'),
                        relativeTarget = (relativeTargetName && this.elem('popup', 'type', relativeTargetName)) || null;

                    if ( relativeTarget ) {
                        if ( relativeTargetName === 'personalization' ) {
                            this.setMod(relativeTarget, 'hidden', '');
                        } else {
                            e.preventDefault();
                            this.toggleMod(relativeTarget, 'hidden', 'yes');
                        }
                    }
                });

                this.bindTo(this.elem('popup'), 'click', function(e) {
                    this.toggleMod(this.elem('popup', 'type', this.getMod($(e.currentTarget), 'type')), 'hidden', 'yes');
                });

                this.bindTo(this.elem('btn', 'action', 'toggle'), 'click', function() {
                    this.toggleMod(this.elem('panel', 'side', 'left'), 'hidden', 'yes');
                });
            }
        }
    }
});
