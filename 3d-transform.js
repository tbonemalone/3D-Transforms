$(document).ready(function() {
	console.log("ready");
	
	function flipForward() {
		// this is the code to move forward
	}
	
	function flipBackward() {
		// this is the code to move backward
	}
	
	$(".flipper").click(function(){
		var nextBottom = '<div class="flip-card next"><!-- the front of the card --><div class="front face"><p>This is the bottom half. Front</p></div><!-- the back of the card --><div class="back face"><p>This was the bottom half back. But now it\'s the top half front</p></div></div>'
    
		if ($(this).hasClass('flip')) {
			$(this).removeClass('flip');
			$('.next').remove();
		} else {
			$(this).addClass('flip');
			$("#flip-container").append(nextBottom);
		}
	})
}); //end doc ready