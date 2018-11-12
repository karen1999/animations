$( document ).ready(function() {
	function random_count(){
		var star_count = Math.floor((Math.random() * 20) + 10);
		for (var i = 0; i <= star_count; i++) {
			coords();
		}
	}
	function coords(){
		var window_width = $(window).width()-40;
		var window_height = $(window).height()-40;
		var random_x = Math.floor((Math.random() * window_width) + 1);
		var random_y = Math.floor((Math.random() * window_height) + 1);

		var star_size_random = Math.floor((Math.random() * 5) + 1);

		$('body').prepend('<p class="stexcvac">&#9733;</p>');
		$(".stexcvac").css({
			"top" : random_y,
			"left" : random_x,
			"opacity" : "1",
		})
		$(".stexcvac").fadeTo(1500, 0);
		$(".stexcvac").attr("class","est");

	}
	var myVar = setInterval(function(){ create_stars() }, 500);
	function create_stars() {
		random_count();
	}

	var myVar1 = setInterval(function(){ opacity_0() }, 500);
	var g = "";
	function opacity_0() {
		var est = $(".est");
		var length = est.length;
		if (est.length != 0) {
			for (var i = 0; i < length; i++) {
				g = document.getElementsByClassName('est')[i].style.opacity;
		    	if (g == 0) {
		    		est[i].remove();
		    		est = $(".est");
		    		length = est.length;
		    	}
			}
		}
	    
	}
});
