$(document).ready(function() {

	// adjust canvas height
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	$('#canvas').attr("width",windowWidth);
	$('#canvas').attr("height", windowHeight);


	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	var targetX = 0,
	    targetY = 0,
	    x = 15,
	    y = 15,
	    velX = 0,
	    velY = 0,
	    speed = 5;

	// initial center of the graphics circle
	var plotX = windowWidth/2,
		plotY = windowHeight/2;


	    
	function drawCircle(){
		//clear the canvas
		ctx.clearRect(0,0,windowWidth,windowHeight);
        
		//make the circle
		color = '#f563f1';
		
  		ctx.beginPath();
        ctx.strokeStyle = '#fff';
        ctx.fillStyle =color;
        ctx.arc(x+10,y,5,0,Math.PI*2);
        ctx.fill();  
	}

	function update(){
	    var tx = targetX - x,
	        ty = targetY - y,
	        // dist = Math.sqrt(tx*tx+ty*ty),
	        rad = Math.atan2(ty,tx),
	        dist = 30;
	        // rad = 5;
	        angle = rad/Math.PI * 180;

	        velX = (tx/dist)*speed,
	        velY = (ty/dist)*speed;
	    
	        x += velX
	        y += velY
	      	
	      	drawCircle();
	    
	    setTimeout(update,10);
	}

	
	update();

	canvas.addEventListener("mousemove", function(e){
	    targetX = e.pageX;
	    targetY = e.pageY;
	});




});
