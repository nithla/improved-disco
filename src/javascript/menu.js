$('.pivot__caret').on('click', function (e) {
    if ($('.skills').hasClass('d-none')) {
        $('.skills').removeClass('d-none');
        $('.pivot__caret').text('See Less').addClass('inverse');
    }
    else {
        $('.skills').addClass('d-none');
        $('.pivot__caret').text('Learn More').removeClass('inverse');
    }
});

$('.header__logo-caret').on('click', function (e) {
    if ($('.header__navigation-links').hasClass('d-none')) {
        $('.header__navigation-links').removeClass('d-none');
        $('.header__logo-caret').addClass('inverse');
    }
    else {
        $('.header__navigation-links').addClass('d-none');
        $('.header__logo-caret').removeClass('inverse');
    }
});