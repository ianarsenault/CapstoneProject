/**
 * Created by Ian Arsenault on 8/8/2016.
 */

$(document).ready(function () {
    // Side-nav Initialization
    $(".button-collapse").sideNav();
    // Modal Initialization
    $('.modal-trigger').leanModal();
    // Parallax Initialization
    $('.parallax').parallax();
    // Dropdown Initialization
    $('.dropdown-button').dropdown();
    // Full-Width Slider
    $('.carousel.carousel-slider').carousel({full_width: true});


});