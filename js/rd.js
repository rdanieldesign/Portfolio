$(document).ready(function(){
	$('.closed').click(function(){
		$('.open').addClass('closed').removeClass('open');
		$(this).addClass('open').removeClass('closed');
	    $('.flexslider').flexslider({
	        animation: "slide",
	        start: function(slider){
	        $('body').removeClass('loading');
	        }
     
    });
	});
});

