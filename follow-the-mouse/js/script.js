$( document ).ready(function() {

	$('html').mousemove(function( event ) {
		var x = event.pageX;
		var y = event.pageY;
		make_stars(x, y);
	});

	setInterval(function(){ remove_stars() }, 500);

});

function make_stars(x, y){
    $('body').prepend('<span class="star-fade">&#9733;</span>');
    x -= 12.5;
    y -= 25;
    $(".star-fade").css({
        "top" : y,
        "left" : x,
    })
    $(".star-fade").fadeTo(1500, 0);
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