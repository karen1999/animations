/*****************************************/
$( document ).ready(function() {
	$('html').mousemove(function( event ) {
		var x = event.pageX;
		var y = event.pageY;
		create_divs(x,y);
	});

	var myVar = setInterval(function(){ opacity_0() }, 500);
	var g = "";
	
});

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

function create_divs(x,y){
    $('body').prepend('<p class="stexcvac">&#9733;</p>');
    x -= 12.5;
    y -= 25;
    $(".stexcvac").css({
        "top" : y,
        "left" : x,
        "opacity" : "1"
    })
    $(".stexcvac").fadeTo(1500, 0);
    $(".stexcvac").attr("class","est");
}