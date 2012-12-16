BEM.DOM.decl('popupa',
{
    onSetMod: {
        'js': function() {
            this.bindTo(this.elem('close'), 'click', this.hide);
        }
    },
    show: function() {
        this.setMod('visibility', 'visible');
        var video = $('.popupa__video');
        if (video) {
            var dataSrc = video.attr('datasrc');
            video.attr('src',  dataSrc);
        }

        return this;
    },
    hide: function() {
        this.delMod('visibility');
        var video = $('.popupa__video');
        video && video.attr('src', '');
        return this;
    },
    toggle: function() {
        this.toggleMod('visibility', 'visible');

        return this;
    }
});