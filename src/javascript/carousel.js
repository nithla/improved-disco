import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

$('.work__carousel').slick({
    speed: 6000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
});