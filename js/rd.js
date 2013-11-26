$(document).ready(function(){
	$('.closed').click(function(){
		$(this).addClass('open').removeClass('closed');
		$(".open ul").css("overflow", "hidden");
		$(".slide-nav").css("display", "block");
	});

	$("ul.slideshow").cycle({
	fx: 'fade',
	pause: 1,
	prev: '.previous',
	next: '.next'
	});

	$('.exit').click(function(){
		$(".open").addClass('closed').removeClass('open');
	});
});