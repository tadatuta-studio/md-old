BEM.DOM.decl('popupa',
{
    onSetMod: {
        'js': function() {
            this
                .bindTo(this.elem('close'), 'click', this.hide);
                .bindTo(this.elem('paranja'), 'click', this.hide);
        }
    },
    show: function() {
        this.setMod('visibility', 'visible');
        var video = this.elem('video');
        if (video) {
            var dataSrc = video.attr('datasrc');
            video.attr('src',  dataSrc);
        }

        return this;
    },
    hide: function() {
        this.delMod('visibility');
        var video = this.elem('video');
        video && video.attr('src', '');
        return this;
    },
    toggle: function() {
        this.toggleMod('visibility', 'visible');

        return this;
    }
});