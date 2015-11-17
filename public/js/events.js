$(function() {
    $('.inlinemenu .graybar').on('click', function() {
        if ($('.inlinemenu .menu').hasClass('open')) {
            $('.inlinemenu .menu').removeClass('open');
            $('.inlinemenu .menu').css('height', '0');
        } else {
            $('.inlinemenu .menu').addClass('open');
            $('.inlinemenu .menu').css('height', 'auto');
        }
    });

    $('.jumper').on('click', function(e) {
        e.preventDefault();

        $('body, html').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600);
    });
});
