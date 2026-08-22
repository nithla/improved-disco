const menuToggle = $('.header__menu');
const headerNavigation = $('.header__navigation');

function setMenu(open) {
    headerNavigation.toggleClass('d-none', !open);
    menuToggle.toggleClass('open', open).attr('aria-expanded', open);
}

menuToggle.on('click', function () {
    setMenu(headerNavigation.hasClass('d-none'));
});

menuToggle.on('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setMenu(headerNavigation.hasClass('d-none'));
    }
});

/* The drawer covers the section a link scrolls to, so close it on the way out. */
headerNavigation.on('click', 'a', function () {
    setMenu(false);
});
