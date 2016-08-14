/**
 * Created by Ian Arsenault on 8/8/2016.
 */

// Carousel Slider function
var carouselChange = function () {
    // Change slider item every 10 seconds
    var carousel_interval = 10000;
    // Initialize materialize carousel slider
    $('.carousel.carousel-slider').carousel({full_width: true});
    // set timed interval function for slider change
    setInterval(function () {
        $('.carousel.carousel-slider').carousel('next');
    }, carousel_interval);
};

var progressBar = function () {
    $(".progress-bar-1").animate( {
        width: "100%"
    }, 2500 );
    $(".progress-bar-middle").animate({
       width: "100%"
    }, 2500);
    $(".progress-bar-2").animate( {
        width: "100%"
    }, 2500 );

    /* Progress Bar Animation
    $(".progress-bar").animate({
        width: "100%"
    }, 2500); */
};


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
    }); */


    // Carousel Slider item change
    carouselChange();
    // Landing page loading bar
    progressBar();

    // Image Carousel automatically goes to next slide every 3.5 seconds
    // Set the carousel interval for next slide
   /* var carousel_interval = 10000;
    $('.carousel.carousel-slider').carousel({full_width: true});
    setInterval(function () {
        $('.carousel.carousel-slider').carousel('next');
    }, carousel_interval);*/



});