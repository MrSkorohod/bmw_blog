$(function(){
    $('.video').height($('.video').width()/2.3);

    $(window).resize(function(){
        $('.video').height($('.video').width()/2.5);
    });
});