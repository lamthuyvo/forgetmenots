$(document).ready(function(e) {

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
		_.each(exesdata, function(value, index){

		var	ringRadius,
			dotsPerRing = (2 * Math.PI * ringRadius)/((2*ringRadius)+gap),
			numOfRings = allEmailsSum;
	  
		// make variables of value
		var boyfriend = value['boyfriend-code'],
		number_emails = value["emails"],
		number_chats = value["chat"],
		color_dark = value["color-dark"],
		color_light = value["color-light"];
		
		// dot function
	  	var makeDot = function(mouseX, mouseY){
	  		
	  		ctx.fillStyle = color_light;
	  		ctx.strokeStyle = '#fff';
	  		//draw a circle
			ctx.beginPath();
			//  ctx.rect(x, y, width, height)
			ctx.arc(x, y, dotRadius,0, Math.PI*2);  
			ctx.stroke();
			ctx.fill();
			ctx.closePath();

	  	}

	  	// for (var i = 0; i < 10; i++){
	  	for (var i = 0; i < number_emails; i++){

			var ringRadius= initialRingRadius + ((2*dotRadius)+ gap)*i; 
			var angleIncrease = (2 * Math.PI)/dotsPerRing;


			// console.log(ringRadius)
			
			
			// numberCircles = number_emails/plots;
			if (index == 0){
				ringRadius = 25+ i*0.3;
				dotsPerRing = 30;
			} else if (index == 1){
				ringRadius = 110 + i*0.2;
				dotsPerRing = 30;
			} else if (index == 2){
				ringRadius = 120 + i*0.3;
				dotsPerRing = 30;
			} else {
				ringRadius = 300 + i*0.3;
				dotsPerRing = 30;
			}

			x = ringRadius * Math.cos(i*angleIncrease) + plotX,
			y = ringRadius * Math.sin(i*angleIncrease) + plotY;

	  		makeDot();

	  	}


		});
	} 

	makeGraphic();
	

});
