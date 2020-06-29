$('.gallery__slider').slick({
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    dots:true,
    // infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    // waitForAnimate: false,
    centerMode: true,
    responsive:[
        {breakpoint:1144,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                centerMode: false,
            }
        }
    ]
    
});

$('.header__btn-menu').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('btn__menu-active');
    $('.menu__ul').toggleClass('btn__menu-active');
    
});

$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 700);
    });

    });



