$( document ).ready(function() {
	
	setInterval(function(){
		make_stars();
		remove_stars();
	}, 500);

});


function make_stars(){
	var star_count = Math.floor((Math.random() * 20) + 10);
	for (var i = 0; i <= star_count; i++) {
		coords();
	}
}

function coords(){
	var window_width = $(window).width()-40;
	var window_height = $(window).height()-40;
	var x = Math.floor((Math.random() * window_width) + 1);
	var y = Math.floor((Math.random() * window_height) + 1);

	$('body').prepend('<span class="star-fade">&#9733;</span>');
	$(".star-fade").css({
		"top" : y,
		"left" : x
	}),
	$(".star-fade").fadeTo(3000, 0);
	$(".star-fade").attr("class","star");
}

function remove_stars() {
	var star_count = $('.star').length;
	if (star_count != 0) {
		for (var i = 0; i < star_count; i++) {
			var opacity = $('.star:eq('+i+')').css("opacity");
	    	if (opacity == 0) {
	    		$('.star:eq('+i+')').remove();
	    	}
		}
	}
}