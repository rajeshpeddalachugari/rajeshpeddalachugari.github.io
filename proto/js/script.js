/// <reference path="jquery-3.2.0.min.js" />


$(document).ready(function (){
    $('.filtertags > a').click(function () {
        $(this).toggleClass("w3-blue");
        $(this).toggleClass("w3-light-gray");
    });
});



function Accord(id) {
    $(".toggledown").toggle();
    $(".toggleup").toggle();
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


