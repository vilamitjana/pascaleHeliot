/*global $, jQuery, alert*/

$(document).ready(function() {

    'use strict';

    var Body = $('body');
    Body.addClass('preloader-site');



    // ========================================================================= //
    //  //PARALAX
    // ========================================================================= //



    // ========================================================================= //
    //  //NAVBAR SHOW - HIDE
    // ========================================================================= //


    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    //     if (scroll > 200) {
    //         $("#main-nav, #main-nav-subpage").slideDown(700);
    //         $("#main-nav-subpage").removeClass('subpage-nav');
    //     } else {
    //         $("#main-nav").slideUp(700);
    //         $("#main-nav-subpage").hide();
    //         $("#main-nav-subpage").addClass('subpage-nav');
    //     }
    // });

    // ========================================================================= //
    //  // RESPONSIVE MENU
    // ========================================================================= //

    $('.responsive').on('click', function(e) {
        $('.nav-menu').slideToggle();
    });

    // ========================================================================= //
    //  Typed Js
    // ========================================================================= //

    var typed = $(".typed");
    $(function() {
        typed.typed({
            strings: ['artist painter'],
            typeSpeed: 100,
            loop: true,
        });
    });

    var typedPol = $(".typed-pol");
    $(function() {
        typedPol.typed({
            strings: ['artysta malarz'],
            typeSpeed: 100,
            loop: true,
        });
    });

    var typedEs = $(".typed-es");
    $(function() {
        typedEs.typed({
            strings: ['artista pintor'],
            typeSpeed: 100,
            loop: true,
        });
    });



    // ================================================================================================== //
    //  language bar animations
    // ================================================================================================== //
    $('.lang-en').on('mouseover', function(e) {
        console.log("anime load");
        anime({
            targets: '.lang-en',
            borderSize: 1,
            padding: 20,
            easing: 'easeInOutQuad',
        });
    });

    $('.lang-en').on('mouseout', function(e) {
        console.log("anime load");
        anime({
            targets: '.lang-en',
            backgroundColor: '#FFFB35',
            borderRadius: ['50%', '0%'],
            borderSize: 0,
            easing: 'easeInOutQuad',
            scale: 1,
            rotate: '0turn'
        });
    });



    // ========================================================================= //
    //  Porfolio isotope and filter
    // ========================================================================= //
    $(window).load(() => {

        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-thumbnail',
            layoutMode: 'fitRows'
        });

        $('#portfolio-flters li').on('click', function() {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({ filter: $(this).data('filter') });
        });

    });


});

// ========================================================================= //
//  Preloader
// ========================================================================= //

$(window).load(function() {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');




});



