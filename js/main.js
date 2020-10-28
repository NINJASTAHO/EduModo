jQuery(function($) {
	$(document).ready(function(){
		$('.s').animationCounter({
			start: 0,
			end: 4000,
			delay: 2,
			step: 1
		});
		$('.c').animationCounter({
			start: 0,
			end: 260,
			delay: 100,
			step: 1
		});
		$('.h').animationCounter({
			start: 0,
			end: 5679,
			delay: 1,
			step: 1
		});
	});
});
jQuery(function($) {
	$(document).ready( function() {
		new WOW().init();
	});
});