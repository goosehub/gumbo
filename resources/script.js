$(document).ready(function()
{
// Preloader
	$(window).load(function(){ 
    $('#preloader').fadeOut(2000,function(){$(this).remove();});
});
// Loading Animations
	$('#logo').addClass('animated rotateIn');
	$('#nav-wrap').addClass('animated lightSpeedIn');
	$('#main-headline').addClass('animated zoomIn');
	$('#carousel-example-generic').addClass('animated fadeInUp');
	$('#let-the-good-times-roll').addClass('animated zoomInDown');
	$('#main-info').addClass('animated zoomInLeft');
	$('#links').addClass('animated zoomInUp');
// Carousel interval
$('.carousel').carousel({
  interval: 6000
})

// Our Story
	$('#story-headline').addClass('animated zoomIn');
	$('#story-1').addClass('animated bounceInLeft');
	$('#story-2').addClass('animated bounceInRight');

// Menus
	$('#menu-cnt').addClass('animated zoomIn');

// Testimonials
	$('#testimonial-headline').addClass('animated zoomIn');
	$('#testimonials-cnt').addClass('animated fadeInUpBig');

// Community
	$('#community-headline').addClass('animated zoomIn');
	$('.community-item').addClass('animated fadeInUpBig');

// Jokes
	$('#joke-headline').addClass('animated bounceInRight');
	$('#joke-sub-headline').addClass('animated bounceInLeft');
	$('.joke-item').addClass('animated fadeInUpBig');

// Club
	$('#club-headline').addClass('animated zoomIn');
	$('#form-cnt').addClass('animated fadeInUpBig');

}); //End Document