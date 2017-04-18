/// <reference path="jquery-3.2.0.min.js" />





window.onload = function (e) {
    getLocation();
};

$(".init").click(function () {
    $(".splashScreen").fadeOut("slow");
});

setTimeout(function () {
    $('.splashScreen').fadeOut('fast');
}, 1000);

$(".sos").click(function () {
    $("#ReqModal").show();
});

$(".chat").click(function () {
    $("#chatModal").show();
});

$(".sendmessage").click(function () {
    showToast();
    $("#chatModal").hide();
});

$(".voiceRecording").click(function (e) {
    e.preventDefault();
    $(".voiceRecordingCard").fadeIn(300, function () { $(this).focus(); });
});

$('.close').click(function () {
    $(".popup").fadeOut(300);
});
$(".voiceRecordingCard").on('blur', function () {
    $(this).fadeOut(300);
});



function showToast() {
    
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
   
}

$(".modalclose").click(function () {

    $("#ReqModal").hide();
    $(".reqIdpanel").show();
    $(".mapholder").toggleClass("w3-margin-top");
    $("#mapholder").css("height", "66vh");
});

var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else { x.innerHTML = "Geolocation is not supported by this browser."; }
}

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    latlon = new google.maps.LatLng(lat, lon)
    mapholder = document.getElementById('mapholder')
    mapholder.style.height = '75vh';
    mapholder.style.width = '100%';

    var myOptions = {
        center: latlon, zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
    };
    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({ position: latlon, map: map, title: "You are here!" });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}