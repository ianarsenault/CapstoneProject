/**
 * Created by Ian Arsenault on 8/8/2016.
 */

$(document).ready(function () {
    // Fade in download demo section on page load 
    $(".Message-Header-Top").fadeIn(5000);
    // Side-nav Initialization
    $(".button-collapse").sideNav();
    // Modal Initialization
    $('.modal-trigger').leanModal();
    // Parallax Initialization
    $('.parallax').parallax();
    // Dropdown Initialization
    $('.dropdown-button').dropdown();
    // Full-Width Slider
    /*$('.carousel.carousel-slider').carousel({
        full_width: true,
        time_constant: 300,
        indicators: true
    });*/


    // Image Carousel automatically goes to next slide every 3.5 seconds
    // Set the carousel interval for next slide
    var carousel_interval = 10000;
    $('.carousel.carousel-slider').carousel({full_width: true});
    setInterval(function () {
        $('.carousel.carousel-slider').carousel('next');
    }, carousel_interval);
    
});