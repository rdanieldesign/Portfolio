$(document).ready(function(){
	$('.closed').click(function(){
		$('.open').addClass('closed').removeClass('open');
		$('flexslider').removeClass('flexslider');
		$(this).addClass('open').removeClass('closed');
		$('.open > .slider-hook').addClass('flexslider');
    	$('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
        $('body').removeClass('loading');
        }
	    });
	});
});
