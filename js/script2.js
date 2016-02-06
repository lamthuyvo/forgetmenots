$(document).ready(function() {

	// adjust canvas height
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	$('#canvas').attr("width",windowWidth);
	$('#canvas').attr("height", windowHeight);

	

	var ctx = document.getElementById('canvas').getContext('2d');


	// destroy and redraw graphic on mousemove
	$(document).mousemove(function(event){
		var mouseX = event.pageX,
			mouseY = event.pageY;

		plotX = mouseX,
		plotY = mouseY;	

		// destroy
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		//redraw
		// window.requestAnimationFrame(makeGraphic);
		makeGraphic();
	})

	// initial center of the graphics circle
	var plotX = windowWidth/2,
		plotY = windowHeight/2;

	var allEmailsSum = 1924;

	var gap = 2,
		dotRadius = 3,
		initialRingRadius = 20;
		

	

	//load data
	var makeGraphic = function(){
		


		var	ringRadius,
			dotsPerRing = (2 * Math.PI * ringRadius)/((2*ringRadius)+gap);
	  
		
		// dot function
	  	var makeDot = function(mouseX, mouseY){
	  		
	  		ctx.fillStyle = color;
	  		ctx.strokeStyle = '#fff';
	  		//draw a circle
			ctx.beginPath();
			//  ctx.rect(x, y, width, height)
			ctx.arc(x, y, dotRadius, 0 , Math.PI*2);  
			ctx.stroke();
			ctx.fill();
			ctx.closePath();

	  	}

	  	// for (var i = 0; i < 10; i++){

		  	

	  	for (var index = 0; index < 37; index++){
					
		  	for (var i = 0; i < 100; i++){
				color = '#f563f1';
			
				var ringRadius= initialRingRadius + ((dotRadius)+ gap)*i; 
				// dotsPerRing = (2*ringRadius)/((gap+2*dotRadius)*i);
				
				var angleIncrease = (2 * Math.PI)/dotsPerRing;

				dotsPerRing = 40;
				ringRadius = 5+ index*15;
				

				x = ringRadius * Math.cos(i*angleIncrease) + plotX,
				y = ringRadius * Math.sin(i*angleIncrease) + plotY;

		  		makeDot();

	  		}

	  	
	  	}

		

	  	
		
	} 

	makeGraphic();
	

});
