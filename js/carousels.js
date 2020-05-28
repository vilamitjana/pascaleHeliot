// ========================================================================= //
//  Owl Carousel Services
// ========================================================================= //


$('.services-carousel').owlCarousel({
    autoplay: false,
    loop: true,
    margin: 20,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 6 } }
});


// ========================================================================= //
//  Image Gallary
// ========================================================================= //


const closeIcon = {
    smallBtn:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close link" title="{{CLOSE}}">' +
        '<svg height="15" width="15"><circle cx="15" cy="15" r="8" stroke="#ffffff" stroke-width="1" fill="#ffffff" /></svg>' +
        "</button>"

};

const closeIconModal = {
    smallBtn:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close link modal" style="stroke:none;outline: none;" title="{{CLOSE}}">' +
        '<svg height="15" width="15"><circle cx="15" cy="15" r="8" stroke="#ffffff" stroke-width="1" fill="#ffffff" /></svg>' +
        "</button>"

};

const zoomIcon = {
    smallBtn:
        '<button id="glass" data-fancybox-zoom class="fancybox-button fancybox-button--zoom link" title="{{ZOOM}}">' +
        "<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><title>ionicons-v5-f</title><path d='M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z' style='fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:16px'/><line x1='338.29' y1='338.29' x2='448' y2='448' style='fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:16px'/></svg>" +
        "</button>",

};
const zoomIconOut = {
    smallBtn:
        '<button id="glass" data-fancybox-zoom class="fancybox-button fancybox-button--zoom link" title="{{ZOOM}}">' +
        "<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><title>ionicons-v5-e</title><path d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z' style='fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px'/><line x1='336' y1='256' x2='176' y2='256' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/></svg>" +
        "</button>",

};

const flechas = {
    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left link" title="{{PREV}}">' +
        '<div>' +
        '<svg xmlns="http://www.w3.org/2000/svg" data-name="arrowLeft" viewBox="0 0 64 80" x="0px" y="0px">' +
        '<polygon points="35.35 43.77 21.45 32 35.35 20.24 36.65 21.77 24.55 32 36.65 42.24 35.35 43.77"/>' +
        '<path d="M32,63A31,31,0,1,1,63,32,31,31,0,0,1,32,63ZM32,3A29,29,0,1,0,61,32,29,29,0,0,0,32,3Z"/>' +
        '</svg>' +
        '</div>' +
        "</button>",
    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right link" title="{{NEXT}}">' +
        '<div>' +
        '<svg xmlns="http://www.w3.org/2000/svg" data-name="arrowRight" viewBox="0 0 64 80" x="0px" y="0px">' +
        '<polygon points="28.65 43.77 27.35 42.24 39.45 32 27.35 21.77 28.65 20.24 42.55 32 28.65 43.77"/>' +
        '<path d="M32,63A31,31,0,1,1,63,32,31,31,0,0,1,32,63ZM32,3A29,29,0,1,0,61,32,29,29,0,0,0,32,3Z"/>' +
        '</svg>' +
        '</div>' +
        "</button>",
    close:
        closeIcon.smallBtn,
    zoom:
        zoomIcon.smallBtn,
    smallBtn: true,
};


const flechas2 = {
    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div>' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" viewBox="0 0 30 37.5" version="1.1" x="0px" y="0px"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g sketch:type="MSArtboardGroup" transform="translate(-45.000000, -720.000000)" fill="#000000"><path d="M70,745.5 C70,745.776142 69.7761424,746 69.5,746 C69.4093371,746 69.3243102,745.97587 69.2509914,745.933681 L49.2590406,734.938108 C49.0170803,734.80503 48.9288139,734.501001 49.061892,734.259041 C49.1106657,734.170361 49.1824024,734.102327 49.2656303,734.058268 L69.2590406,723.061892 C69.501001,722.928814 69.8050298,723.01708 69.938108,723.259041 C69.9818001,723.338481 70.0016327,723.424612 70,723.509186 L70,745.5 Z M50.5375193,734.5 L69,744.654364 L69,724.345636 L50.5375193,734.5 Z" sketch:type="MSShapeGroup"/></g></g></svg>' +
        '</div>' +
        "</button>",
    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<div>' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" viewBox="0 0 30 37.5" version="1.1" x="0px" y="0px"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g sketch:type="MSArtboardGroup" transform="translate(-90.000000, -720.000000)" fill="#000000"><path d="M115,745.5 C115,745.776142 114.776142,746 114.5,746 C114.409337,746 114.32431,745.97587 114.250991,745.933681 L94.2590406,734.938108 C94.0170803,734.80503 93.9288139,734.501001 94.061892,734.259041 C94.1106657,734.170361 94.1824024,734.102327 94.2656303,734.058268 L114.259041,723.061892 C114.501001,722.928814 114.80503,723.01708 114.938108,723.259041 C114.9818,723.338481 115.001633,723.424612 115,723.509186 L115,745.5 Z M95.5375193,734.5 L114,744.654364 L114,724.345636 L95.5375193,734.5 Z" sketch:type="MSShapeGroup" transform="translate(104.500000, 734.499953) scale(-1, 1) translate(-104.500000, -734.499953) "/></g></g></svg>' +
        '</div>' +
        "</button>",
    close:
        closeIcon.smallBtn,
    zoom:
        zoomIcon.smallBtn,
    smallBtn: true,

};




const fancyStyleModal = {
    infobar: false,
    toolbar: "auto",
    buttons: [
        "close"
    ],
    animationEffect: "fade",
    animationDuration: 1000,
    transitionEffect: "fade",
    transitionDuration: 1000,
    arrows: false,
    btnTpl: closeIconModal,
    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
        '<div class="fancybox-bg "></div>' +
        '<div class="fancybox-inner">' +
        '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
        '<div class="fancybox-toolbar">{{buttons}}</div>' +
        '<div class="fancybox-navigation">{{arrows}}</div>' +
        '<div class="fancybox-stage modal-text"></div>' +
        '<div class="fancybox-caption"><div id="captionID" class="fancybox-caption__body"></div></div>' +
        '</div>' +
        '</div>',
};


const zoombutton = {
    baseTpl: '<div  class="fancybox-container" role="dialog" tabindex="-1">' +
        '<div id="modal" class="fancybox-bg"></div>' +
        '<div class="fancybox-inner">' +
        '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
        '<div class="fancybox-toolbar">{{buttons}}</div>' +
        '<div class="fancybox-navigation">{{arrows}}</div>' +
        '<div  class="fancybox-stage"><ion-icon id="glass" name="search-outline"></ion-icon><ion-icon id="minus" name="remove-circle-outline"></ion-icon></div>' +
        '<div class="fancybox-caption"><div id="captionID" class="fancybox-caption__body"></div></div>' +
        '</div>' +
        '</div>',
}

const captionListeners = (glassOp) => {


    /* if on desktop add mouse events */

    $('#glass').mouseenter(() => {
        $('#captionID').css({ "opacity": 1 })
        $('#glass').css({ "opacity": glassOp })

    });

    $('#minus').mouseenter(() => {
        $('#captionID').css({ "opacity": 1 })
        $('#glass').css({ "opacity": glassOp })

    });

    $('.fancybox-content').mouseenter(() => {
        $('#captionID').css({ "opacity": 1 })
        $('#glass').css({ "opacity": glassOp })

    });

    $('.fancybox-content').mouseleave(() => {
        $('#captionID').css({ "opacity": 0 })
        $('#glass').css({ "opacity": 0 })
    });


    $('#glass').click(() => {
        if (instance.isScaledDown()) {
            instance.scaleToActual();
            glassOp = 0;
            $('#glass').css({
                "opacity": "0",
            });
            $('#minus').css({
                "opacity": "1",
            });


        } else {
            glassOp = 1;
            instance.scaleToFit();
            $('#glass').css({
                "opacity": "1",
            });
            $('#minus').css({
                "opacity": "0",
            });
        }
    });

    $('#minus').click(() => {
        if (instance.isScaledDown()) {
            instance.scaleToActual();
            glassOp = 0;
            $('#glass').css({
                "opacity": "0",
            });
            $('#minus').css({
                "opacity": "1",
            });


        } else {
            instance.scaleToFit();
            glassOp = 1;
            $('#glass').css({
                "opacity": "1",
            });
            $('#minus').css({
                "opacity": "0",
            });
        }
    });

}


const captionPostionSet = (XposGlass, YposGlass, Xpos, Ypos, captionWidth) => {
    /* set caption next to image*/
    $('#glass').css({
        'position': 'fixed',
        "top": YposGlass + "px",
        "left": XposGlass + "px",
        "z-index": 99999,
        "color": "white",
        "font-size": "50px",
        "transition": "all 1s ease-in-out",
        "-moz-transition": "all 1s ease-in-out",
        "-webkit-transition": "all 1s ease-in-out",
    });

    $('#minus').css({
        'position': 'fixed',
        "top": YposGlass + "px",
        "left": XposGlass + "px",
        "z-index": 99999,
        "color": "white",
        "font-size": "50px",
        "opacity": "0",
        "transition": "all 1s ease-in-out",
        "-moz-transition": "all 1s ease-in-out",
        "-webkit-transition": "all 1s ease-in-out",
    });
    $('#captionID').css({
        'position': 'fixed',
        "top": Ypos + "px",
        "left": Xpos + "px",
        "width": captionWidth + "px",
        "transition": "all 1s ease-in-out",
        "-moz-transition": "all 1s ease-in-out",
        "-webkit-transition": "all 1s ease-in-out",
    });
}


const captionEffect = (instance, current) => {
    // add link class
    $("#glass").addClass("link");
    $("#minus").addClass("link");

    /* get media and oriantation */
    const lanscape = ($(window).width() >= $(window).height()) ? true : false;
    const mobile = $(document).width() <= 1024 ? true : false;

    initHovers();

    // get image height
    let imgW = parseInt(current.width);
    let imgH = parseInt(current.height);

    let imgWZoomed = parseInt(current.$content[0].clientWidth);
    let imgHZoomed = parseInt(current.$content[0].clientHeight);

    /* get zoom image heigth*/
    if (imgW >= imgWZoomed || imgH >= imgHZoomed) {
        imgW = parseInt(imgWZoomed);
        imgH = parseInt(imgHZoomed);
    }


    /* get image oriantation*/
    const imgOriatationLandscape = imgW >= imgH ? true : false;

    /*  Caluculate Caption position */
    const gutterRight = (parseInt($(window).width()) - imgW) / 2;
    const gutterBottom = (parseInt($(window).height()) - imgH) / 2;

    /* Right gutter size */
    let captionWidth = gutterRight - 80;

    /* Get image position */
    let cords = current.$content[0].style.transform.substring(9).replace("(", "").replace(")", "").replace(/px/g, "").split(',');

    /* Get Text new position */
    let Xpos = parseInt(cords[0]) + parseInt(imgW) + 50;
    let Ypos = parseInt(cords[1]);

    let XposGlass = parseInt(cords[0]) + parseInt(imgW) - 70;
    let YposGlass = parseInt(cords[1]) + parseInt(imgH) - 70;

    let glassOp = imgH > 850 ? 1 : 0;

    /* Calculate image position depending on media and image oriantation*/

    // captionPostionSet(XposGlass, YposGlass, Xpos, Ypos, captionWidth);

    /* desktop lanscape image lanscape  && desktop lanscape image Portrait */
    if (lanscape) {
        if (gutterRight < 230) {
            Xpos = parseInt(cords[0]);
            Ypos = parseInt(cords[1]) + parseInt(imgH) + 5;
            captionWidth = imgW;
        }
        captionPostionSet(XposGlass, YposGlass, Xpos, Ypos, captionWidth);
    }

    if (mobile) {
        if (imgOriatationLandscape || gutterRight < 100) {
            captionWidth = imgW;
            Xpos = parseInt(cords[0]) + 3;
            Ypos = parseInt(cords[1]) + parseInt(imgH) + 5;
        }
        else {
            captionWidth = gutterRight - 20;
            Xpos = parseInt(cords[0]) + parseInt(imgW) + 20;
            Ypos = parseInt(cords[1]);
        }
        if (gutterRight < 110 && gutterBottom < 35) {
            Xpos = parseInt(cords[0]) + 3;
            Ypos = parseInt(cords[1]) + parseInt(imgH) ;
        }


        $('#glass').css({
            "opacity": "0",

        });

        $('#minus').css({
            "opacity": "0",
        });

        $('#captionID').css({
            'position': 'fixed',
            "top": Ypos + "px",
            "left": Xpos + "px",
            "width": captionWidth + "px",
            "opacity": "1",
            "transition": "all 1s ease-in-out",
            "-moz-transition": "all 1s ease-in-out",
            "-webkit-transition": "all 1s ease-in-out",
        });

        console.log("caption Height", $('#captionID').height(), "gutterBottom", gutterBottom);
        if ($('#captionID').height() > gutterBottom-3 && gutterRight < 230) {
            console.log("pre ", Ypos);
            Ypos = parseInt(cords[1]) + parseInt(imgH) - parseInt($('#captionID').height()) + (parseInt($('#captionID').height()) - parseInt(gutterBottom)) / 2
            console.log("top ", Ypos);
            $('#captionID').css({
                'position': 'fixed',
                "top": Ypos + "px",
                "left": Xpos + "px",
                "width": captionWidth + "px",
                "opacity": "1",
                "transition": "all 1s ease-in-out",
                "-moz-transition": "all 1s ease-in-out",
                "-webkit-transition": "all 1s ease-in-out",
            });
        }

        // if ($('.span-long').length) {
        //     $('#captionID').css({
        //         "bottom": "4px",
        //         "padding-left": "12px",
        //     });
        // }
        // if ($('.compact').length) {
        //     $('#captionID').css({
        //         "bottom": "3px",
        //         "padding-left": "12px",
        //     });
        // }
    }


    captionListeners(glassOp);

}

const fancyStyle1 = {
    infobar: true,
    toolbar: "auto",
    buttons: [
        "close"

    ],
    loop: true,
    baseTpl: zoombutton.baseTpl,
    animationEffect: "zoom-in-out",
    animationDuration: 1000,
    transitionEffect: "zoom-in-out",
    transitionDuration: 1000,
    btnTpl: flechas,
    spinnerTpl: '<div class="preloader-wrapper-gal"><div class="preloader">  <img src="/img/Interwind-1s-327px.svg" alt="preloader"></div></div>',
    afterShow: (instance, current) => {
        // console.log('AfterShow', current, instance);
        captionEffect(instance, current)
    }
};



const fancyStyle2 = {
    infobar: true,
    toolbar: "auto",
    buttons: [
        "close"
    ],
    loop: false,
    baseTpl: zoombutton.baseTpl,
    animationEffect: "zoom-in-out",
    animationDuration: 1000,
    transitionEffect: "zoom-in-out",
    transitionDuration: 1000,
    btnTpl: flechas2,
    spinnerTpl: '<div class="preloader-wrapper-gal"><div class="preloader">  <img src="/img/Interwind-1s-327px.svg" alt="preloader"></div></div>',
    afterShow: (instance, current) => {
        // console.log('AfterShow', current, instance);
        captionEffect(instance, current)
    }
};

$('[data-fancybox="authors"]').fancybox(fancyStyle2);

$('[data-fancybox="twister"]').fancybox(fancyStyle1);
$('[data-fancybox="arrangments"]').fancybox(fancyStyle1);
$('[data-fancybox="trifles"]').fancybox(fancyStyle1);
$('[data-fancybox="figurative"]').fancybox(fancyStyle1);
$('[data-fancybox="other"]').fancybox(fancyStyle1);
$('[data-fancybox="aquarella"]').fancybox(fancyStyle1);


$('[data-fancybox="ua1"]').fancybox(fancyStyle2);
$('[data-fancybox="ua2"]').fancybox(fancyStyle2);
$('[data-fancybox="ua3"]').fancybox(fancyStyle2);
$('[data-fancybox="ua4"]').fancybox(fancyStyle2);
$('[data-fancybox="ua5"]').fancybox(fancyStyle2);
$('[data-fancybox="ua6"]').fancybox(fancyStyle2);
$('[data-fancybox="ua7"]').fancybox(fancyStyle2);
$('[data-fancybox="ua8"]').fancybox(fancyStyle2);
$('[data-fancybox="ua9"]').fancybox(fancyStyle2);

$('[data-fancybox="modal-text"]').fancybox(fancyStyleModal);


// ========================================================================= //
// Put Caption
// ========================================================================= //

// ========================================================================= //
// carousels
// ========================================================================= //


$('#basic-twister').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000
});

$('#basic-arrangments').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
});

$('#basic-trifles').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
});

$('#basic-figurative').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
});

$('#basic-aquarella').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
});

$('#basic-other').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000
});


$('#basic-ua1').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000
});

$('#basic-ua2').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
});

$('#basic-ua3').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
});

$('#basic-ua4').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
});

$('#basic-ua5').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
});

$('#basic-ua6').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000
});

$('#basic-ua7').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000
});

$('#basic-ua8').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000
});
$('#basic-ua9').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000
});