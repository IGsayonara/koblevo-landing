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
                icon: document.getElementById('location-icon-src').innerText,
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