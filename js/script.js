$(document).ready(function(){
	$('.slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: '<button type="button" class="slick-prev slick-arrow"> < </button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"> > </button>', 
		responsive: [
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
	  ]
	});
});