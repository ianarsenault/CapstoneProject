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

// Function handles progress bar animations for loading div
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
var scrollChange = function () {
    /* Fixed Navbar Scroll */
    var lastScrollTop = 0;
    // .navbar-fixed will change all pages navbar
    /*var navbar = $('.navbar-fixed');*/
    // home nav Will only change homepage navigation
    var navbar = $('.home-nav');
    var chatbtn = $("#fixChatBtn");

    $(window).scroll(function() {
        // If window width is greater than 992 & less than 1550px
        // do scrollTop function stuff > transition + opacity changes
        if ($(window).width() > 992 && $(window).width() < 1550) {
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

            } // end else

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

        // For side-nav popout on devices smaller than 993px
        if($(window).width() < 993) {
            var y2 = $(this).scrollTop();
            if (y2 > lastScrollTop) {
                chatbtn.css({
                    transition: "opacity 0.5s linear",
                    opacity: 0.2
                });
            } else {
                chatbtn.css({
                    transition: "opacity 0.5s linear",
                    opacity: 0.2
                });
            }


            // If scroll point  is at the same last scrollpoint after .5 seconds lose opacity
            lastScrollTop = y2;
            var scrolly2 = $('body').scrollTop();
            setTimeout(function () {
                if(scrolly2 == $('body').scrollTop()) {
                    chatbtn.css({
                        visibility: "visible",
                        transition: "opacity 0.5s linear",
                        opacity: 1
                    })
                }
            }, 500);
        }


        // Displays scrollTop in console (Showing when user reached bottom of page)
        console.log($(window).scrollTop() == ($(document).height() - $(window).height()));
    });
};


// Active scroll spy functionality
var activeScrollspy = function () {


    /** Need to update this function to get rid of active class when entering
     *   new scrollspy section - Now it activates 2 at the same time at bottom
     *   and top points **/

    // Scrollspy initalization
    $('.scrollspy').scrollSpy({scrollOffset: 50});
    //$(".scrollspy").scrollSpy();
    // Scrollspy enter function - Confirms when
    // user enters specified scrollspy id
    $(".scrollspy").on('scrollSpy:enter', function () {
        // Display enter scrolling points of each div id to console
        console.log('enter:', $(this).attr('id'));
        // add active class to parent li in horizontal navigation
        $(".navbar-fixed").find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active-nav');
        // add active class to parent li in vertical side-navigation
        $("#slide-out").find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active-nav');

    });
    // Scrollspy enter function - Confirms when
    // user exits specified scrollspy id
    $(".scrollspy").on('scrollSpy:exit', function () {
        // Display exit scrolling points of each div id to console
        console.log('exit:', $(this).attr('id'));
        // remove active class from parent li
        $(".navbar-fixed").find('a[href="#'+$(this).attr('id')+'"]').parent().removeClass('active-nav');
        // add active class to parent li in vertical side-navigation
        $("#slide-out").find('a[href="#'+$(this).attr('id')+'"]').parent().removeClass('active-nav');

    });
};

// ELement fire function
var scrollfire = function () {
    var options = [
        /* {selector: '#staggered-test', offset: 50, callback: function(el) {
         Materialize.toast("This is our ScrollFire Demo!", 1500 );
         } },
         {selector: '#staggered-test', offset: 205, callback: function(el) {
         Materialize.toast("Please continue scrolling!", 1500 );
         } },*/
        {selector: '#staggered-test', offset: 400, callback: function(el) {
            Materialize.showStaggeredList($(el));
        } }
    ];
    Materialize.scrollFire(options);

};

// Contact form function
var contactForm = function () {
    var textMessage = document.getElementById("message");
    $(textMessage).on('input', function () {
        var submitBtn = $("#sendMailBtn");
        if(this.value.length > 3) {
            //alert("Someone entered something!");
            //submitBtn.css("background-color", "red");
            submitBtn.css({
                backgroundColor: "#5e35b1"
            });
            $(submitBtn).hover(function () {
                $(this).css("background-color", "#7B46E9");
            }, function () {
                $(this).css("background-color", "#5e35b1")
            });
        } else {
            submitBtn.css({
                transition: "all 1s ease-in-out",
                backgroundColor: "#388e3c"

            });
            $(submitBtn).hover(function () {
                $(this).css("background-color", "#41B145");
            }, function () {
                $(this).css("background-color", "#388e3c")
            });
        }

    });

};

// Enables scrolling after 9 seconds -- loading screen
var switchScroll = function () {
    var body = $("body");
    setTimeout(function () {
        body.removeClass("stop-scrolling");
    }, 9000);
};


// Show main content after landing div loads first
var mainContent = function () {
    var main = $(".main-section");
    setTimeout(function () {
        main.fadeIn();
    }, 5000);
};

$(document).ready(function () {
    /** CHANGE BACK WHEN LIVE **/
    // $(".main-section").fadeIn(10000);

    /* Fade out overlay and loading screen */
    /** CHANGE BACK WHEN LIVE **/
    // $(".loading-overlay").fadeIn('slow').show().delay(8000).fadeOut(500);
    /** CHANGE BACK WHEN LIVE **/
    // $("#fadediv").show();
    /** CHANGE BACK WHEN LIVE **/
    // Delay window scroll function
    //switchScroll();
    //mainContent();

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
    //$('.scrollspy').scrollSpy();
    activeScrollspy();

    // Carousel Slider item change
    carouselChange();

    //$('.carousel').carousel();

    // Landing page loading bar
    progressBar();
    // Scroll effects
    scrollChange();
    // Scrollfire function
    scrollfire();
    // Contact form function
    contactForm();
    // Tabs Initialization
    $('ul.tabs').tabs();

    // Form Drop Doww -- CHECKOUT
    $("select").material_select();

    // for HTML5 "required" attribute
    $("select[required]").css({display: "inline", height: 0, padding: 0, width: 0});

    // PUSHPIN
   // $('.breadcrumb-nav .bcrumb-hvr').pushpin({ top: $('.bcrumb-hvr').offset(50).top });



});