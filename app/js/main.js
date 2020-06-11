// $(function(){

//     $('.slider-content').slick({
//         vertical: true,
//   verticalSwiping: true,
//   arrows: false,
//   infinite: true,
//   dots: true,
//     });  
// });
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
  
  });