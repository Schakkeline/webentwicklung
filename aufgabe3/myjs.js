$('.sidenav a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

})


$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll + 10) {
                $('.sidenav a.active').removeClass('active');
                $('.sidenav a').eq(i).addClass('active');
            }
        });

    } else {

        $('.sidenav a.active').removeClass('active');
        $('.sidenav a:first').addClass('active');
    }

}).scroll();
