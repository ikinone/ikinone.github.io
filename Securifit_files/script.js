$(document).ready(function(){
    $.mobile.loading().hide();
    $("#year").html((new Date).getFullYear());

    var $menuOpen = $("#menu-open");
    var $menuClose = $("#menu-close");
    var $mobileMenu = $("#mobile-menu");

    $menuOpen.click(function(){
        $menuOpen.hide();
        $menuClose.show();
        $mobileMenu.fadeIn();
    });

    $menuClose.click(function(){
        $menuClose.hide();
        $menuOpen.show();
        $mobileMenu.fadeOut();
    });

    $mobileMenu.on( "swipe", function () {
        $menuClose.hide();
        $menuOpen.show();
        $mobileMenu.fadeOut();
    } );

    $('.ui-link').removeClass('ui-link');
});

