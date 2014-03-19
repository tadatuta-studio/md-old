BEM.DOM.decl({ block: 'button', modName: 'theme', modVal: 'howitworks' }, {
    onSetMod: {
        js: {
            inited: function() {
                this.on('click', function() {
                    var landingSteps = this
                            .findBlockOutside('b-page')
                            .findBlockInside('landing-steps')
                            .domElem;

                    landingSteps.show();

                    $('html, body').animate({
                        scrollTop: $(landingSteps).offset().top
                    }, 500);

                });
            }
        }
    }
})
