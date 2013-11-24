var is_touch_device = 'ontouchstart' in document.documentElement;

if(is_touch_device){
	$('<link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />"' ).replaceWith('<link href="stylesheets/screen-touch.css" media="screen, projection" rel="stylesheet" type="text/css" />');
}
