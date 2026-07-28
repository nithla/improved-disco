import $ from 'jquery';

const headerCaret = $('.header__logo-caret');
const headerNavigation = $('.header__navigation-links');

headerCaret.on('click', function (e) {
    if (headerNavigation.hasClass('d-none')) {
        headerNavigation.removeClass('d-none');
        headerCaret.addClass('inverse');
    }
    else {
        headerNavigation.addClass('d-none');
        headerCaret.removeClass('inverse');
    }
});
