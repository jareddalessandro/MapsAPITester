// Light the candle
window.onload = loadScript;

// The "main function"
function loadScript() {
    // Get the user's location
    navigator.geolocation.getCurrentPosition(drawMap, failState);
}

// This is the successful callback function for getCurrentPosition(), its argument contains the coordinates.
function drawMap(position) {

    lat = position.coords.latitude;
    long = position.coords.longitude;

    console.log("Location: " + lat, long);
    console.log("Timestamp: " + position.timestamp)
    
    // These are the specifics we will pass to the Map() function down below
    var mapOptions = {
        center: new google.maps.LatLng(lat, long), // choose where we are centering
        mapTypeId: google.maps.MapTypeId.HYBRID, // Other options: SATELLITE, ROADMAP, TERRAIN, HYRBID
        zoom:20 // 20 is max
    };

    myMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// In case we don't find the user
function failState() {
    console.log('Location not found');
}
