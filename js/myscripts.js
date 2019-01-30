$(document).ready(function(){
	var mNav = $("nav");
	    stickyDiv = "sticky";
	    mHeader = $('header').height();

	$(window).scroll(function() {
	  if( $(this).scrollTop() > mHeader ) {
	    $('header').addClass(stickyDiv);
	  } else {
	    $('header').removeClass(stickyDiv);
	  }

	  if( $(this).scrollTop() > 400 ) {
	    $('.btn-go-top').addClass('active');
	  } else {
	    $('.btn-go-top').removeClass('active');
	  }
	});


	$('.g-img-slider').slick({
		infinite: true,
		dots: true,
		slidesToScroll: 1,
		centerMode: true,
		// variableWidth: true,
		centerPadding: '0',
		slidesToShow: 3,
		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});



	$('.g-img-slider2').slick({
		infinite: true,
		dots: true,
		slidesToScroll: 1,
		centerMode: true,
		// variableWidth: true,
		centerPadding: '0',
		slidesToShow: 3,
		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});


	$('.u-review-slider').slick({
		infinite: true,
		slidesToScroll: 1,
		speed: 1500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 3000
	});
});