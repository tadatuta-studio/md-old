BEM.DOM.decl({ block: 'form', modName: 'type', modVal: 'contact' },
{
    onSetMod: {
        'js': function() {
            var _this = this;

            this.button = this.findBlockInside('button');

            BEM.DOM.blocks.input.on(this.domElem, 'change', function() {
                _this._validate();
            });

            this.bindTo('submit', function(e) {
                $.post(_this.domElem.attr('action'), { text: $('[name=text]').val(), name: $('[name=name]').val(), email: $('[name=email]').val() },
                    function() {
                        BEM.DOM.update(_this.domElem, '<div style="height: 280px">Thanks for your message.<br/>Please allow 1-2 business days for a response.</div>');
                    }
                );

                e.preventDefault();
            });

            this._validate();
        }
    },
    _validate: function() {
        var totalFilled = 0;

        $('.input__control').each(function() {
            $(this).val() && totalFilled++;
        });

        totalFilled < 3 ? this.button.setMod('disabled', 'yes') : this.button.delMod('disabled');
    }
});