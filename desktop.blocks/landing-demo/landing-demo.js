BEM.DOM.decl('landing-demo', {
    onSetMod: {
        'js': {
            'inited': function() {
                var showHints = true;

                this.bindTo('click', function() {
                    if(this.getMod('view') === 'magic-desktop') return;

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

                            t.elem('mask').delay(config.transitionDuration).hide(0, function() {
                                t.elem('mask').html('');
                            });
                        }, 250);
                    }(this));

                    if(showHints) {
                        showHints = false;
                        this.setMod(this.elem('hint', 'target', 'md'), 'hidden', 'yes');
                        this.delMod(this.elem('hint', 'target', 'windows'), 'hidden');
                    }

                    this.setMod('view', 'magic-desktop');
                });

                this.bindTo(this.elem('hotspot'), 'click', function(e) {
                    var relativeTargetName = this.getMod($(e.currentTarget).parent(), 'action'),
                        relativeTarget = (relativeTargetName && this.elem('popup', 'type', relativeTargetName)) || null;

                    this.setMod(this.elem('hint', 'target', 'windows'), 'hidden', 'yes');

                    if ( relativeTarget ) {
                        if ( relativeTargetName === 'personalization' ) {
                            this.setMod(relativeTarget, 'hidden', '')
                        } else {
                            e.preventDefault();
                            this.toggleMod(relativeTarget, 'hidden', 'yes');
                        }

                        this.delMod(this.findElem('popup', 'focused', 'yes'), 'focused');

                        if ( !this.hasMod(relativeTarget, 'hidden') ) this.setMod(relativeTarget, 'focused', 'yes');
                    }
                });

                this.bindTo(this.elem('popup'), 'click', function(e) {
                    var popup = this.elem('popup', 'type', this.getMod($(e.currentTarget), 'type'));

                    this.toggleMod(popup, 'hidden', 'yes');
                    this.hasMod(popup, 'hidden') && this.delMod('focused', 'yes');
                });

                this.bindTo(this.findElem(this.elem('btn', 'action', 'toggle'), 'hotspot'), 'click', function() {
                    this.toggleMod(this.elem('panel', 'side', 'left'), 'hidden', 'yes');
                });

                this.bindTo(this.findElem(this.elem('btn', 'action', 'exit-md'), 'hotspot'), 'click', function() {
                    this.elem('mask').css('background-image', 'none').show(0);

                    (function(t) {
                        var config = {
                                count: 8,
                                effectDuration: 300,
                                transitionDuration: 750
                            },
                            src = '../../desktop.blocks/landing-demo/landing-demo-win.jpg',
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
                                    height: itemHeight + 'px',
                                    opacity: 0
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
                                    .transition({ opacity: 1 }, config.effectDuration);
                            });

                            t.elem('mask').delay(config.transitionDuration).show(0, function() {
                                t.elem('mask').css({ backgroundImage: '' }).html('');
                            });
                        }, 250);
                    }(this));

                    this.setMod('view', 'windows');

                    return false;
                });
            }
        }
    }
});
