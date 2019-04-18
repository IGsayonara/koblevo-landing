import "./reset.css";
import "./style.scss";
import "./grid.scss";
require ("slick-carousel/slick/slick")
import "slick-carousel/slick/slick.scss"

console.log($.slick);

$( document ).ready(function() {
    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: false,
        infinite: true,
        autoplaySpeed: 5000,
    });
});

