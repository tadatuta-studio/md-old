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
        this.autoplayParam = this.autoplayParam || (window.location.hash == '#demo' ? '&amp;autoplay=1' : '');

        this.setMod('visibility', 'visible');
        var video = this.elem('video');
        if (!video) return this;

        if ($.browser.msie  && parseInt($.browser.version, 10) <= 8) {
            this.elem('video-wrapper').html('<object class="popupa__video"><param name="movie" value="//www.youtube.com/v/1ZpTwSULBh0?hl=ru_RU&amp;version=3' + this.autoplayParam + '"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed class="popupa__video-embed" src="//www.youtube.com/v/1ZpTwSULBh0?hl=ru_RU&amp;version=3' + this.autoplayParam + '" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true"></embed></object>');
            return this;
        }

        var dataSrc = video.attr('data-src') + this.autoplayParam;
        video.attr('src',  dataSrc);

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