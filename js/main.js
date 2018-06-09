$(document).ready(function() {
    $(".header__menu-left li a").click(function() {
        $(this).parent().addClass('header__menu-left--active').siblings().removeClass('header__menu-left--active');
    });

    $(".header__search--mobile i").click(function() {
        $(".header__form").toggle();

    });
});

// .siblings().removeClass('active')