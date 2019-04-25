import "slick-carousel/slick/slick.scss"
require("slick-carousel/slick/slick");

import "bootstrap-datepicker"
require("bootstrap-datepicker/dist/css/bootstrap-datepicker3.standalone.min.css");

import "select2"
require("select2/dist/css/select2.min.css");

import 'hamburgers'
require ("hamburgers/dist/hamburgers.min.css")

import './css/index.scss'




function InitMapCLASS(container, styles) {
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


$(document).ready(function () {

    var $sliderPrimary = $('.slick-carousel_main').slick({
        dots: true,
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
            itemToPlace.css(positionFrom, (itemToPlaceIn.height() - itemToPlace.height()) / 2 + disturbingHeight + 20 + 'px')
        } else {
            itemToPlace.css(positionFrom, 'auto');
        }
    }

    $('#seeMoreImages_btn').click(function () {
        // $(this).data-text-toggle
        $('#seeMoreImages_content').toggle('fast');
    });

    $('#burger').click(function () {
        $(this).toggleClass('is-active');
        $('#burger-content').toggleClass('is-active');
    });



    $(".datepicker").datepicker();

    $('#sel1').select2();
    $('#sel2').select2();
    $('#sel3').select2();

    $(document).on('click', '.label_for_sel1', function (e) {
        if (e.originalEvent) {
            $(this).siblings('select').select2('open');
        }
    });
    $(document).on('click', '.label_for_sel2', function (e) {
        if (e.originalEvent) {
            $(this).siblings('select').select2('open');
        }
    });
    $(document).on('click', '.label_for_sel3', function (e) {
        if (e.originalEvent) {
            $(this).siblings('select').select2('open');
        }
    });


    $('.slider_form form,#feedback_zone').submit(function (e) {
        e.preventDefault();
        console.log( e );
        $(this).parent().addClass('disabledDiv');

        $.ajax({
            type: $(this).prop('method'),
            url: $(this).prop('action'),
            data: $(this).serialize(),
            success: function(response){
                $(this).parent().append(`
                    <div class="success">Success!</div>
                `);
                $(this).remove();
                $(this).parent().removeClass('disabledDiv');

            },
            error: function () {
                $(this).parent().append(`
                    <div class="error">Error!</div>
                `);
                $(this).remove();
                $(this).parent().removeClass('disabledDiv');

            }
        });
    });



});


