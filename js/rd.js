$(document).ready(function(){
	$('.closed').click(function(){
		$(this).addClass('open').removeClass('closed');
		$(".open ul").css("overflow", "hidden");
	});
	$('.exit').click(function(){
		$(".open").addClass('closed').removeClass('open');
	});
});