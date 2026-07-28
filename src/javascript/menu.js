import $ from 'jquery';

const pivotCaret = $('.pivot__caret');
const skills = $('.skills');
const headerCaret = $('.header__logo-caret');
const headerNavigation = $('.header__navigation-links');


pivotCaret.on('click', function (e) {
    if (skills.hasClass('d-none')) {
        skills.removeClass('d-none');
        pivotCaret.text('See Less').addClass('inverse');
    }
    else {
        skills.addClass('d-none');
        pivotCaret.text('Learn More').removeClass('inverse');
    }
});

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