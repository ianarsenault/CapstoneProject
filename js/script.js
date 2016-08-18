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
    // Blue Progress Bar
    $(".progress-bar-1").animate( {
        width: "100%"
    }, 2500 );
    // Blue Progress Bar
    $(".progress-bar-middle").animate({
       width: "100%"
    }, 2500);
    // Blue Progress Bar
    $(".progress-bar-2").animate( {
        width: "100%"
    }, 2500 );
};


// Function for scrolling effects
var scrolly = function () {
    /* Fixed Navbar Scroll */
    var lastScrollTop = 0;
    var navbar = $('.navbar-fixed');
    var chatbtn = $("#fixChatBtn");

    $(window).scroll(function() {
        // If window width is less than 1550px
        // do scrollTop function stuff > transition + opacity changes
        if ($(window).width() < 1550) {
            var y = $(this).scrollTop();
            // If scrolltop point is greater than last scroll position
            if (y > lastScrollTop) {
                // scrolling down code
                //alert("down");
                // Change navbar opacity to almost transparent
                navbar.css({
                    //visibility: "hidden",
                    transition: "opacity 0.5s linear",
                    opacity: 0.2
                });
                chatbtn.css({
                    transition: "opacity 0.5s linear",
                    opacity: 0.2
                });
            } else {
                // scrolling up code
                //alert("up");
                // If it's scrolling up lose opacity
                navbar.css({
                    visibility: "visible",
                    transition: "opacity 0.5s linear",
                    opacity: 1
                });
                chatbtn.css({
                    transition: "opacity 0.5s linear",
                    opacity: 0.2
                })

            }
            // If scroll point  is at the same last scrollpoint after .5 seconds lose opacity
            lastScrollTop = y;
            var scrolly = $('body').scrollTop();
            setTimeout(function () {
                if(scrolly == $('body').scrollTop()) {
                    navbar.css({
                        visibility: "visible",
                        transition: "opacity 0.5s linear",
                        opacity: 1
                    });
                    chatbtn.css({
                        visibility: "visible",
                        transition: "opacity 0.5s linear",
                        opacity: 1
                    })
                }
            }, 500);

        } // end if


        /*  Bottom right hand corner button - Scroll to top function
         *   will appear when window scroll reaches a certain point
         *   - added animation to when it comes into view ********/
       /* if (y > 600) {
            $("#fixChatBtn").fadeIn().addClass("animated fadeInDown");

        } else {
            $("#fixChatBtn").fadeOut();
        }*/

       // Displays scrollTop in console (Showing when user reached bottom of page)
        console.log($(window).scrollTop() == ($(document).height() - $(window).height()));

    });
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
    // Scrollspy Initialization
    $('.scrollspy').scrollSpy();


    // Carousel Slider item change
    carouselChange();
    // Landing page loading bar
    progressBar();
    // Scroll effects
    scrolly();
    

});