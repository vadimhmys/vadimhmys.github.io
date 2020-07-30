$(function () {
    var $menu = $('.menu');
    var $wheel = $('.header__wheel');
    var $menuLeft = document.getElementsByClassName('menu__item')[0];
    var $menuRight = document.getElementsByClassName('menu__item')[1];
    $menuLeft.addEventListener('mouseover', function () {
        $wheel.css('animation', 'rotateWheelLeft 5s linear infinite  forwards');
    }, false);
    $menuRight.addEventListener('mouseover', function () {
        $wheel.css('animation', 'rotateWheelRight 5s linear infinite  forwards');
    }, false);

    $(".chosen-select").chosen({
        disable_search_threshold: 5
    });
    var $people = $('.chosen-single span').text('People');
    $(function () {
        $("#datepicker").datepicker({
            changeMonth: true,
            changeYear: true
        });
    });
    $('#basicExample').timepicker();

    /****slider****/

    let position = 0; //начальная позиция
    const slidesToShow = 1; //сколько элементов показывать
    const slidesToScroll = 1; //на сколько позиций проскролить 
    const container = $('.slider-container');
    const track = $('.slider-track');
    const item = $('.slider-item');
    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth
        });
    });


    btnNext.click(function () {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtn();
    });

    btnPrev.click(function () {
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtn();
    });

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };

    const checkBtn = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth);
    };

    checkBtn();

    /******menu*******/

    var menuLinks = $('.delicious__header-link');

    menuLinks.each(function (index, item) {
        $(item).on('click', function (e) {
            e.preventDefault();

            var links = $('.delicious__header-link');
            links.css('color', '#333');
            $(links[index]).css('color', '#E8C300');


            var menuBlocks = $('.delicious__menu');
            menuBlocks.fadeOut();
            $(menuBlocks[index]).fadeIn();


        });
    })

});
