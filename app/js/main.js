// $(function(){

//     $('.slider-content').slick({
//         vertical: true,
//   verticalSwiping: true,
//   arrows: false,
//   infinite: true,
//   dots: true,
//     });  
// });
$(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
        scrollHorizontally: true,
  
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});

