$(document).ready(function() {

	// adjust canvas height
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	$('.section').css("min-height", windowHeight);
	var columnWidth1 = $('#rabbit-hole').width(),
		leftX1 = (windowWidth - columnWidth1)/2;


	$('#dot').attr("width", columnWidth1);
	$('#dot').attr("height", 400);
	$('#dot').css("margin-left", leftX1);




	var canvas1 =document.getElementById("dot"),
    ctx1 = canvas1.getContext("2d");

	

	var targetX = leftX1,
	    targetY = windowHeight,
	    x1 = leftX1+100,
	    y1 = windowHeight*1.5,
	    velX = 0,
	    velY = 0,
	    speed = 5;

	function update(){
	    var tx = targetX - x1,
	        ty = targetY - y1,
	        dist = Math.sqrt(tx*tx+ty*ty),
	        rad = Math.atan2(ty,tx),
	        angle = rad/Math.PI * 180;

	        velX = (tx/dist)*speed,
	        velY = (ty/dist)*speed;
	    
	        x1 += velX
	        y1 += velY
	            
	        ctx1.clearRect(0,0,500,500);
	        ctx1.beginPath();
	        ctx1.arc(x1 - leftX1,y1 - windowHeight,5,0,Math.PI*2);
	        ctx1.fill();
	    
	    setTimeout(update,10);
	}

	update();

	canvas1.addEventListener("mousemove", function(e){
	    targetX = e.pageX;
	    targetY = e.pageY;

	});

	canvas1.addEventListener('touchmove', function(e) {
		targetX = e.pageX;
	    targetY = e.pageY;
	});






});
