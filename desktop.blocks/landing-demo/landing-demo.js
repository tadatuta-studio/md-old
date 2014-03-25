BEM.DOM.decl('landing-demo', {
    onSetMod: {
        'js': {
            'inited': function() {
                this.bindTo('click', function() {
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
