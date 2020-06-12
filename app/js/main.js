
$(document).ready(function() {
    $('#fullpage').fullpage({
      autoScrolling:true,
      scrollHorizontally: true,
      navigation: true,
      navigationPosition: 'left',
      slidesNavigation: true,
      navigationTooltips: ['01', '02', '03', '04', '05'],
      showActiveTooltip: true,
      scrollingSpeed: 700,
    });

    $('.slider__inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: '.slider__arrow--left',
      nextArrow: '.slider__arrow--right',
        });  
  
  });