
        let map;
        let directionsService;
        let directionsRenderer;

        function initMap() {
            // Initialize the map
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 40.67962646484375, lng: -73.99728393554688 },
                zoom: 14,
                mapId: 'DEMO_MAP_ID'
            });

            // Initialize the DirectionsService and DirectionsRenderer
            directionsService = new google.maps.DirectionsService();
            directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);

            // Add a click event listener to the map
            map.addListener('click', function (event) {
                calculateAndDisplayRoute(event.latLng);
            });

            // Add an initial marker
            new google.maps.Marker({
                position: { lat: 40.67962646484375, lng: -73.99728393554688 },
                map: map,
                title: 'My location'
            });
        }

        function calculateAndDisplayRoute(destination) {
            const start = { lat: 40.67962646484375, lng: -73.99728393554688 };
            const request = {
                origin: start,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING
            };

            directionsService.route(request, function (result, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsRenderer.setDirections(result);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }
    