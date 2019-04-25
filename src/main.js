import "slick-carousel/slick/slick.scss"
require("slick-carousel/slick/slick");

import "bootstrap-datepicker"
require("bootstrap-datepicker/dist/css/bootstrap-datepicker3.standalone.min.css");

import "select2"
require("select2/dist/css/select2.min.css");

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

function initMap() {
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


    (function () {
        console.log( $(".see_more").length );
        if($(".see_more").length){

        }
    })();
    // $(".see_more").click(function () {
    //     if (is_open == false) {
    //         is_open = true;
    //
    //         $(".see_more > button").text("Скрыть");
    //
    //         $("#r1").after("<div class='row' id='r2'></div>");
    //         $("#r2").after("<div class='row' id='r3'></div>");
    //         $('#r2').append('<div class="col-md-4"><a href=""><div class="gallery_photo"><img src="photo1.png" alt="" width="100%"></div></a></div><div class="col-md-4"><a href=""><div class="gallery_photo"><img src="photo1.png" alt="" width="100%"></div></a></div><div class="col-md-4"><a href=""><div class="gallery_photo"><img src="photo1.png" alt="" width="100%"></div></a></div>');
    //         $('#r3').append('<div class="col-md-4"><a href=""><div class="gallery_photo"><img src="photo1.png" alt="" width="100%"></div></a></div><div class="col-md-4"><a href=""><div class="gallery_photo"><img src="photo1.png" alt="" width="100%"></div></a></div><div class="col-md-4"><a href=""><div class="gallery_photo"><img src="photo1.png" alt="" width="100%"></div></a></div>');
    //     } else {
    //         is_open = false;
    //         $(".see_more > button").text("Смотреть все фото");
    //         $("#r2").html("");
    //         $("#r3").html("");
    //         $("#r2").remove();
    //         $("#r3").remove();
    //     }
    // });


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
});


