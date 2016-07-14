/*

 $(function() {
 $(".phone").mask("+7 (999) 999-9999");
 });

 */

/* sliders */

window.onload = function () {
    $('.slider').lemmonSlider({slideToLast: true});
};

/* lightGallery */

$(function () {
    $('.lightGallery').lightGallery({});
});

/* down scroll */

$(function () {
    $('.menu-5').click(function () {
        $("html, body").stop().animate({
            scrollTop: $($('#box-5-w')).offset().top + 120
        }, {
            duration: 700
        });
        return false;
    });
});

/* down scroll */

$(function () {
    $('.button-1').click(function () {
        $("html, body").stop().animate({
            scrollTop: $($('#box-5-w')).offset().top - 95
        }, {
            duration: 700
        });
        return false;
    });
});

/*

 $(window).scroll(function() {
 var scroll = $(this).scrollTop();
 if( scroll > $('#box-5-w').outerHeight() + 120 )
 {
 $('#menu').removeClass('menu-5-r').addClass('menu-5-f');
 }
 else
 {
 $('#menu').removeClass('menu-5-f').addClass('menu-5-r');
 }
 });

 */

/* */

$(function () {
    var menuItem = $('.menu-5-0');
    menuItem.click(function () {
        menuItem.parent().children().removeClass('menu-5-active');
        menuItem.addClass('menu-5-active');
        $('.box-5-1, .box-5-2, .box-5-3, .box-5-4').slideDown(300);
    });
});

$(function () {
    var menuItem = $('.menu-5-1');
    menuItem.click(function () {
        menuItem.parent().children().removeClass('menu-5-active');
        menuItem.addClass('menu-5-active');
        $('.box-5-2, .box-5-3, .box-5-4').slideUp(300);
        $('.box-5-1').slideDown(300);
    });
});

$(function () {
    var menuItem = $('.menu-5-2');
    menuItem.click(function () {
        menuItem.parent().children().removeClass('menu-5-active');
        menuItem.addClass('menu-5-active');
        $('.box-5-1, .box-5-3, .box-5-4').slideUp(300);
        $('.box-5-2').slideDown(300);
    });
});

$(function () {
    var menuItem = $('.menu-5-3');
    menuItem.click(function () {
        menuItem.parent().children().removeClass('menu-5-active');
        menuItem.addClass('menu-5-active');
        $('.box-5-2, .box-5-1, .box-5-4').slideUp(300);
        $('.box-5-3').slideDown(300);
    });
});

$(function () {
    var menuItem = $('.menu-5-4');
    menuItem.click(function () {
        menuItem.parent().children().removeClass('menu-5-active');
        menuItem.addClass('menu-5-active');
        $('.box-5-2, .box-5-3, .box-5-1').slideUp(300);
        $('.box-5-4').slideDown(300);
    });
});

/* pop-up */

$(function () {
    $('.top-button, .button-10').click(function () {
        $('#zb1').fadeIn(300);
        $('.wrapper').fadeIn(300);
        $('body').css('overflow', 'hidden');
    });
});

$(function () {
    $('.button-2').click(function () {
        $('#zb2').fadeIn(300);
        $('.wrapper').fadeIn(300);
        $('body').css('overflow', 'hidden');
    });
});

$(function () {
    $('.button-pod').click(function () {
        $($(this).attr('data-modal')).fadeIn(300);
        $($(this).attr('data-modal')).css('top', $(window).scrollTop());
        $('.wrapper').fadeIn(300);
        $('body').css('overflow', 'hidden');
    });
});

$(function () {
    $('.dostavka').click(function () {
        $('#delivery').fadeIn(300);
        $('.wrapper').fadeIn(300);
        $('body').css('overflow', 'hidden');
    });
});

$(function () {
    $('.button-rev').click(function () {
        $('.pop-up').fadeOut(0);
        $('#zb3').fadeIn(300);
        $('.wrapper').fadeIn(300);
        $('body').css('overflow', 'hidden');
    });
});

$(function () {
    $('.btn-send-buy').click(function () {
        $('.pop-up').fadeOut(0);
        $('#send-buy').fadeIn(300);
        $('.wrapper').fadeIn(300);
        $('body').css('overflow', 'hidden');
    });
});

$(function () {
    $('.wrapper, .closee').click(function () {
        $('.thnx, .wrapper, .z-box, .pop-up, .delivery').fadeOut(300);
        $('body').css('overflow', 'auto');
    });
});

/* form */

$(function () {
    $('#form').validate(
        {
            rules: {
                "numb": {
                    required: true
                }
            },
            messages: {
                "numb": {
                    required: ""
                }
            }
        })
});

$(function () {
    $('#form1').validate(
        {
            rules: {
                "numb": {
                    required: true
                }
            },
            messages: {
                "numb": {
                    required: ""
                }
            }
        })
});

$(function () {
    $('#form6').validate(
        {
            rules: {
                "numb": {
                    required: true
                }
            },
            messages: {
                "numb": {
                    required: ""
                }
            }
        })
});

$(function () {
    $('#form2').validate(
        {
            rules: {
                "numb": {
                    required: true
                }
            },
            messages: {
                "numb": {
                    required: ""
                }
            }
        })
});

$(function () {
    $('#form3').validate(
        {
            rules: {
                "numb": {
                    required: true
                }
            },
            messages: {
                "numb": {
                    required: ""
                }
            }
        })
});

/* end */