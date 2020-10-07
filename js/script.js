$(window).load(function() {
    
    $('header').removeClass('sticky');
    
    // $('.scroll-logo-image').removeClass('scroll-logo-image');
    // $('.header-search-icon').removeClass('scroll-search-icon');
    // $('.header-user-tool-heart-icon').removeClass('scroll-heart-icon');
    // $('.header-user-tool-bag-icon').addClass('scroll-bag-icon').attr('src','img/Icon bag11.png');

    /* For the sticky navigation */
    $('.js-section-grid-image').waypoint(function(direction) {
        if (direction == "down") {
            $('header').addClass('sticky');
            $('.navigation').addClass('sticky');
            $('.scroll-logo-image').addClass('scroll-logo-image').attr('src','img/Logos.png');
            $('.header-search-icon').addClass('scroll-search-icon').attr('src','img/Icon search-scroll.png');
            $('.header-user-tool-heart-icon').addClass('scroll-heart-icon').attr('src','img/Icon heart-scroll.png');
            $('.header-user-tool-bag-icon').addClass('scroll-bag-icon').attr('src','img/Icon bag-scroll.png');
        } else {
            $('header').removeClass('sticky');
            $('.navigation').removeClass('sticky');
            $('.scroll-logo-image').addClass('scroll-logo-image').attr('src','img/Logof.png');
            $('.header-search-icon').addClass('scroll-search-icon').attr('src','img/Icon search11.png');
            $('.header-user-tool-heart-icon').addClass('scroll-heart-icon').attr('src','img/heart-icon.png');
            $('.header-user-tool-bag-icon').addClass('scroll-bag-icon').attr('src','img/Icon bag11.png');
        
        }
    }, {
      offset: '60px;'
    });
});