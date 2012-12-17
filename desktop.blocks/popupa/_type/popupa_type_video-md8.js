BEM.DOM.decl({ block: 'popupa', modName: 'type', modVal: 'video-md8' },
{
    show: function() {
        var video = this.elem('video');
        if (video) {
            var dataSrc = video.attr('data-src');
            video.attr('src',  dataSrc);
        }

        this.__base();
    },
    hide: function() {
        var video = this.elem('video');
        video && video.attr('src', '');

        this.__base();
    }
});