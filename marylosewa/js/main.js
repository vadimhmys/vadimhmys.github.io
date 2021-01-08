$(document).ready(function(){
    
     //анимация списка

     function showSpisokItems(){
        $('.advantages li').each(function(index){
             var spisokItems = $(this);
             setTimeout(function(){
                 spisokItems.addClass('openSpisokWhyI')
             },500*(index+1));
        });
     }
     
     $('.advantages').on('mouseenter',function(){
        showSpisokItems();
     })

     $('#advantagesLink').on('click',function(){
       showSpisokItems();
     });
    
    
    //чтоб не повторять HTML-код header__menu
    
     document.getElementById('feedbacks__contacts').innerHTML = document.getElementsByClassName('header__menu')[0].innerHTML;
    
    //слайдер
    
    $('.sliderBg').slick({
        arrows:false
    });
    $('.sliderMain__slider').slick({
        arrows:false,
        asNavFor:'.sliderWindows__inner'
    });
    $('.sliderWindows__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor:'.sliderBg,.sliderMain__slider',
        responsive:[
            {
            breakpoint:580,
                settings:{
                    slidesToShow: 2
                }
            }
        ]
        
    });
    
    //анимация номера телефона

    function animNumberPhone(){
        $('header .header__phone span').each(function(index){
         var item = $(this);
         setTimeout(function(){
             item.addClass('phoneAnim')
         },200*(index+1));
     
         setTimeout(function(){
             item.removeClass('phoneAnim')
         },400*(index+1));
        });
       }
       animNumberPhone();
       setInterval(function(){
           animNumberPhone()},3000);
    
    

    //бургер-меню
    
    $('.header__burger').on('click',function(){
        $('.header__blackout').addClass('openBlock').removeClass('closeBlock');
    });
    
    $('.header__close').on('click',function(){
        $('.header__blackout').addClass('closeBlock').removeClass('openBlock');
    });
    
    $('.header__blackout a').on('click',function(){
        $('.header__blackout').addClass('closeBlock').removeClass('openBlock');
    });
    
    //плавный переход на нужную страницу
    
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('html').animate({scrollTop: top}, 500);
    });

    //нажатие на кнопку УЗНАТЬ БОЛЬШЕ
    
    var $timing = 1000;
    
    $('.aboutMe__btn').on('click',function(){
        $(this).hide();
        $('.aboutMe__content p+p').fadeIn($timing);
        $('.aboutMe__photo1').slideUp($timing);
        $('.aboutMe__photo2').slideDown($timing);
    });
    
    $('.aboutMe__btn-ago').on('click',function(){
        $('.aboutMe__content p+p').hide();
        $('.aboutMe__btn').show();
        $('.aboutMe__photo2').hide();
        $('.aboutMe__photo1').show();
    });
    
    //всплывающие окна
    
    $('.popup-underWear').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
           enabled: true,
        },
        zoom: {
         enabled: true,
         duration: 300
        }
     });
    
    $('.popup-straps').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
           enabled: true,
        },
        zoom: {
         enabled: true,
         duration: 300
        }
     });

    

     //слайдер отзывов
    
     $('.sliderFeedbacks').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow: 2
                }
            },
            {
            breakpoint:480,
                settings:{
                    slidesToShow: 1,
                    fade: true,
                    cssEase: 'linear'
                }
            }
        ]
     });

     //окно отзыва
    var $openWindowForm = $('.feedback__btn'),
        $windowForm = $('.feedbacks form'),
        $areaAroundForm = $('.feedbacks>div'),
        $sliderFeedbacks = $('.sliderFeedbacks'),
        $sendWindowForm = $('.feedback__send'),
        $closeWindowForm = $('.feedback__close');
    
        $openWindowForm.on('click',function(){
         $(this).hide();
         $windowForm.css('display','block');
         $areaAroundForm.css('background-color','rgba(2,2,2,.86)');
         $sliderFeedbacks.css('z-index','-1');
     });

     $('.feedback__send,.feedback__close').on('click',function(){
        $windowForm.css('display','none');
        $areaAroundForm.css('background-color','rgba(255,255,255,.65)');
        $sliderFeedbacks.css('z-index','inherit');
        $openWindowForm.show();
    });
});



