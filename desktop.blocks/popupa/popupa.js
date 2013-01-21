BEM.DOM.decl('popupa',
{
    onSetMod: {
        'js': function() {
            window.location.hash == '#demo' && this.show();

            this
                .bindTo(this.elem('close'), 'click', this.hide)
                .bindTo(this.elem('paranja'), 'click', this.hide);
        }
    },
    show: function() {
        var autoplayParam = window.location.hash == '#demo' ? '&autoplay=1' : '';

        this.setMod('visibility', 'visible');
        var video = this.elem('video');
        if (video) {
            var dataSrc = video.attr('data-src') + autoplayParam;

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