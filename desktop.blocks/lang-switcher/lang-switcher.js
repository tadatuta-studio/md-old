BEM.DOM.decl('lang-switcher', {

    onSetMod: {
        'js': function() {
            var dropdown = this.findBlockInside('dropdown');
            this.bindTo('click', function(){
                dropdown.toggle();
            });
        }
    }

});
