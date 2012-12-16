BEM.DOM.decl('slider',
    {
        onSetMod: {
            'js': function() {
                var popupa = this.findBlockOutside('b-page').findBlockInside({ block: 'popupa', modName: 'type', modVal: 'video-md8' });
                this.bindTo(this.elem('play'), 'click', function() {
                    popupa.show();
                });
            }
        }
    });

$(function(){
    $('.slider').each(function () {
        var tmp = $(this);
        $(tmp).find('.slider__switcher li').each(function (i) {
            $(tmp).find('.slider__switcher li:eq('+i+')').live('click', function(){
                var tab_id=i+1;
                $(tmp).find('.slider__switcher li').removeClass('slider__button_state_active');
                $(this).addClass('slider__button_state_active');
                $(tmp).find('.slider__item .slider__description').css('padding-left','30px').animate({paddingLeft:"0"}, 500);
                $(tmp).find('.slider__item').stop(false,false).fadeOut(300).removeClass('slider__item_state_active');
                $(tmp).find('.slider__item_slide_'+tab_id).stop(false,false).fadeIn(600).addClass('slider__item_state_active');
                return false;
            });
        });
    });
});