$(function()
{
    
    //Preloader
    
    $(window).on('load',function(){
		$(".preloader_main").delay(1000).fadeOut(1000);
	});
    
    //Back to Top Button
    
    $(window).scroll(function() 
    {
        var scrollValue = $(this).scrollTop();

        if (scrollValue > 200)
        {
            $(".top_button").fadeIn(1000);
        }
        else
        {
            $(".top_button").fadeOut(1000);
        }
    });

    $(".top_button").click(function() 
    {
        $("html, body").animate({scrollTop : 0}, 1000);
    });
    
    //Navbar Toggle
    
    $('.nav_toggler').on('click', function()
    {
        $('.nav_catch').slideToggle(1000);
    })
    
    //Navbar Sticky Fix
    
    var topNavHeight = $('#welcome_text').height();
    var mainNavHeight = $('.nav_bar').height()+34;
    
    $(window).scroll(function()
    {
        var scrollAmount = $(this).scrollTop();
        
        if(scrollAmount > topNavHeight)
        {
            $('.nav_bar').addClass('fixed-top');
            $('#banner').css({'margin-top': mainNavHeight+'px'});
        }
        else
        {
            $('.nav_bar').removeClass('fixed-top');
            $('#banner').css({'margin-top': '0'});
        }
    });
    
    $(document).on('click', 'a[href^="#"]:not([data-toggle])', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - mainNavHeight +1
    }, 500);
    });
    
    //Slick Slider
    
    $('.banner_carousel_parent').slick(
    {
        infinite: true,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 3000,
        prevArrow: '.prev_arrow',
        nextArrow: '.next_arrow',
    });
    
    $('.blog_contents').slick(
    {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        prevArrow: '.blog_prev_arrow',
        nextArrow: '.blog_next_arrow',
        responsive:
        [
            {
                breakpoint: 992,
                settings:
                {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings:
                {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings:
                {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    $('.testimonial_slides').slick(
    {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.testimonial_slides_nav_parent',
        prevArrow: '.testimonial_prev_arrow',
        nextArrow: '.testimonial_next_arrow',
        infinite: true
    });
    
    $('.testimonial_slides_nav_parent').slick(
    {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial_slides',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        autoplay: false,
        responsive:
        [
            {
                breakpoint: 768,
                settings:
                {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    $('.testimonial_logo_slides').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: '.testimonial_logo_next_arrow',
        prevArrow: '.testimonial_logo_prev_arrow',
        responsive:
        [
            {
                breakpoint: 992,
                settings:
                {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    //Services Hover
    
    $('.col_1 .services_rotated_box').hover(function()
    {
        $(this).addClass('services_hover');
        $('.col_1 .services_texts').addClass('services_hover services_hover_shadow');
        $('.col_1 .services_texts::before').addClass('services_hover');
    },function()
    {
        $(this).removeClass('services_hover');
        $('.col_1 .services_texts').removeClass('services_hover services_hover_shadow');
    });
    
    $('.col_2 .services_rotated_box').hover(function()
    {
        $(this).addClass('services_hover');
        $('.col_2 .services_texts').addClass('services_hover services_hover_shadow');
        $('.col_2 .services_texts::before').addClass('services_hover');
    },function()
    {
        $(this).removeClass('services_hover');
        $('.col_2 .services_texts').removeClass('services_hover services_hover_shadow');
    });
    
    $('.col_3 .services_rotated_box').hover(function()
    {
        $(this).addClass('services_hover');
        $('.col_3 .services_texts').addClass('services_hover services_hover_shadow');
        $('.col_3 .services_texts::before').addClass('services_hover');
    },function()
    {
        $(this).removeClass('services_hover');
        $('.col_3 .services_texts').removeClass('services_hover services_hover_shadow');
    });
    
    
    $('.col_1 .services_texts_parent').hover(function()
    {
        $('.col_1 .services_texts').addClass('services_hover services_hover_shadow');
        $('.col_1 .services_texts::before').addClass('services_hover');
        $('.col_1 .services_rotated_box').addClass('services_hover');
    },function()
    {
        $('.col_1 .services_texts').removeClass('services_hover services_hover_shadow');
        $('.col_1 .services_rotated_box').removeClass('services_hover');
    });
    
    $('.col_2 .services_texts_parent').hover(function()
    {
        $('.col_2 .services_texts').addClass('services_hover services_hover_shadow');
        $('.col_2 .services_texts::before').addClass('services_hover');
        $('.col_2 .services_rotated_box').addClass('services_hover');
    },function()
    {
        $('.col_2 .services_texts').removeClass('services_hover services_hover_shadow');
        $('.col_2 .services_rotated_box').removeClass('services_hover');
    });
    
    $('.col_3 .services_texts_parent').hover(function()
    {
        $('.col_3 .services_texts').addClass('services_hover services_hover_shadow');
        $('.col_3 .services_texts::before').addClass('services_hover');
        $('.col_3 .services_rotated_box').addClass('services_hover');
    },function()
    {
        $('.col_3 .services_texts').removeClass('services_hover services_hover_shadow');
        $('.col_3 .services_rotated_box').removeClass('services_hover');
    });
    
    //Counter Up
    
    $('.counter').counterUp(
    {
        delay: 10,
        time: 1000
    });
    
    //Blog Section Fix
    $('.blog_slide').hover(function()
    {
        $('.blog_nohover_top').css({'display': 'none'});
        $('.blog_nohover_bottom').css({'display': 'none'});
    },function()
    {
        $('.blog_nohover_top').css({'display': 'block'});
        $('.blog_nohover_bottom').css({'display': 'block'});
    })
       
});