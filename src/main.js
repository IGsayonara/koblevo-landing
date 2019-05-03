import "slick-carousel/slick/slick.scss"
require("slick-carousel/slick/slick");

import "bootstrap-datepicker"
require("bootstrap-datepicker/dist/css/bootstrap-datepicker3.standalone.min.css");

import "select2"
require("select2/dist/css/select2.min.css");

import 'hamburgers'
require ("hamburgers/dist/hamburgers.min.css");

import 'magnific-popup'
require ("magnific-popup/dist/magnific-popup.css");

import 'jquery.maskedinput/src/jquery.maskedinput'

import './js/modal'

import './css/index.scss'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


/*function InitMapCLASS(container, styles) {
    let _markers = container.querySelectorAll('.marker'),

        map = new google.maps.Map(container, {
            zoom: 14,
            center: new google.maps.LatLng(0, 0),
            styles: styles,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
        });

    map.markers = [];

    let bounds = new google.maps.LatLngBounds();

    _markers.forEach((elem, i) => {
        let latlng = new google.maps.LatLng(elem.getAttribute('data-lat'), elem.getAttribute('data-lng')),
            marker = new google.maps.Marker({
                position: latlng,
                // icon: document.getElementById('location-icon-src').innerText,
                map: map
            });


        if (elem.innerText.length > 0) {
            let infowindow = new google.maps.InfoWindow({
                content: elem.innerText
            });
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        }


        map.markers.push(marker);
        bounds.extend(latlng);

    });

    if (map.markers.length === 1) {
        // set center of map
        map.setCenter(bounds.getCenter());

        // map.setZoom( 14 );
    } else {
        map.fitBounds(bounds);
    }

}

window.initMap = function initMap() {
    document.querySelectorAll('.google-map').forEach((el, i) => {
        let styles = [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ];

        new InitMapCLASS(el, styles);
    });
}
*/

$(document).ready(function () {
  /*  $(window).resize(function(){
        console.log($(window).width())
        if($(window).width() <= '990'){
            $(".sf_2").load("index.html #sf_2")
        }
        else{
            $(".sf_1").load("index.html #sf_1")
        }
    });*/
    var $sliderPrimary = $('.slick-carousel_main').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: true,
        autoplaySpeed: 5000,
        centerPadding: '40px',
    });
    absFormPosCenter(
        $sliderPrimary.siblings().find('.form-wrap'),
        $sliderPrimary,
        'bottom',
        // $sliderPrimary.find('.slick-dots')
    );
    window.addEventListener('resize', function () {
        absFormPosCenter(
            $sliderPrimary.siblings().find('.form-wrap'),
            $sliderPrimary,
            'bottom',
            // $sliderPrimary.find('.slick-dots')
        );
    });

    function absFormPosCenter(itemToPlace, itemToPlaceIn, positionFrom, disturbingElem) {
        var disturbingHeight = disturbingElem !== undefined ? disturbingElem.height() : 0;
        if ($(window).width() > 990) {
            itemToPlace.css(positionFrom, (itemToPlaceIn.height() - itemToPlace.height()) / 2 + disturbingHeight + 'px')
        } else {
            itemToPlace.css(positionFrom, 'auto');
        }
    }

    $('#seeMoreImages_btn').click(function () {
        $('#seeMoreImages_content').toggle('fast');
        var currText = this.innerText;
        this.innerText = $(this).attr('data-text-toggle');
        $(this).attr('data-text-toggle', currText);
    });

    $('#burger').click(function () {
        $(this).toggleClass('is-active');
        $('#burger-content').toggleClass('is-active');
    });

    // $('.gallery_photo').magnificPopup({type:'image'});
    $('#gallery_inner').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Загрузка #%curr%...',
        tClose: 'Закрыть',
        mainClass: 'mfp-img-mobile',
        gallery: {
            tPrev: 'Пред.',
            tNext: 'След.',
            tCounter: '%curr% из %total%',
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: 'Ошибка при загрузке <a href="%url%">фото #%curr%</a>.',
            // titleSrc: function(item) {
            //     return item.el.attr('title') + '<small>Фотогалерея</small>';
            // }
        },
        ajax: {
            tError: 'Ошибка при загрузке <a href="%url%">фото #%curr%</a>.',
        }
    });

    $('.phone-masked').mask("+38(999)-999-99-99?");

    $('.slider_form form,#feedback_zone,#getDetailsModal_form').submit(function (e) {
        e.preventDefault();
        // console.log( e );
        $(this).parent().addClass('disabledDiv');

        $.ajax({
            type: $(this).prop('method'),
            url: $(this).prop('action'),
            data: $(this).serialize(),
            success: function(response){
                console.log( response );
                $(this).parent().append(`
                    <div class="text-center p-2">
                       <!-- ${!response.error ? '<img src="./src/ico/success.png" alt="">':''} -->
                        <h2>${response.heading}</h2>
                        <p>${response.message}</p>
                    </div>
                `);
                $(this).parent().removeClass('disabledDiv');
                $(this).remove();
            }.bind(this),
            error: function () {
                $(this).parent().append(`
                    <div class="text-center">
                        <h2>Ошибка!</h2>
                    </div>
                `);
                $(this).parent().removeClass('disabledDiv');
                $(this).remove();
            }.bind(this)
        });
    });

    $('[data-scrollTo]').on('click', function (event) {
        event.preventDefault();
        let el = $(this).attr('data-scrollTo');
        $("html, body").animate({
            scrollTop: $(el).offset().top
        }, 1000);
    });


    (function () {
        class Handler {
            constructor(elem) {
                this.el = elem;
                this.label = this.el.querySelector('label');
                this.input = this.el.querySelector('input,textarea');

                this.activeHtmlClass = 'active';
            }

            getValue() {
                return this.input.value
            }

            focus() {
                this.el.classList.add(this.activeHtmlClass)
            }

            blur() {
                if (this.getValue().length === 0) {
                    this.el.classList.remove(this.activeHtmlClass)
                }
            }

            addListeners() {
                this.input.addEventListener('focus', this.focus.bind(this));
                this.input.addEventListener('change', this.focus.bind(this));
                this.input.addEventListener('blur', this.blur.bind(this));
            }

            removeListeners() {
                this.input.removeEventListener('focus', this.focus);
                this.input.removeEventListener('blur', this.blur);
            }

            init() {
                // console.log( this.input,this.label );
                // console.log( this.input.value );

                if(this.input){
                    this.addListeners();
                    if (this.getValue().length > 0) {
                        this.focus();
                    }
                } else {
                    this.el.classList.add('not-actual-input');
                }

            }
        }

        document.querySelectorAll('.input-wrap').forEach((el) => {
            new Handler(el).init()
        })
    })();
});


