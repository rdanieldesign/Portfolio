$(document).ready(function(){
	$('.closed').click(function(){
		$('.open').addClass('closed').removeClass('open');
		$(this).addClass('open').removeClass('closed');
		/* $(".open ul").css("overflow", "hidden"); 
		$(".slide-nav").css("display", "block"); */
	});
});