$(document).ready(function(){
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1020px'},
			500,
			"linear",
			function() {
				$(this).hide();
				$(this).css('left','553px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})

/*Implemented new feature*/

$(document).keydown(function(event) {
	if (event.which == 88) {
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-cool').show();
	}
<<<<<<< HEAD
	})
$(document).keyup(function(event) {
	if (event.which == 88) {
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	}
});
=======
	});

	$(document).keyup(function(event) {
		if (event.which == 88) {
			$('.ryu-still').show();
			$('.ryu-cool').hide();
		}
	});

>>>>>>> ea9e1c974ee5cb5f0c75f60a796600e5a72d7065
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$('#hadouken-sound')[0].play();
}
