var elMap = document.getElementById("loc");

var msg = 'Sorry, you are invisible';

navigator.geolocation.getCurrentPosition(success, fail);

function success(position) {
    msg = '<h3>Longitude:<br>';
    msg += position.coords.latitude + '</h3>';
    msg += '<h3> Latitude:<br>';
    msg += position.coords.longitude + '</h3>';
    console.log(msg);
    elMap.innerHTML = msg;
}

function fail(msg) {
    elMap.textContent = msg;
    console.log(msg.code);
}