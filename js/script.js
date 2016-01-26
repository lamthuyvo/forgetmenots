$( document ).ready(function() {

	// adjust canvas height
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	$('#canvas').attr("width",windowWidth);
	$('#canvas').attr("height", windowHeight);

	document.onmousemove = function (e) {
	    mouseX = e.pageX;
	    mouseY = e.pageY;

	};
	
	//load data
	_.each(exesdata, function(value, index){
	  
		// make variables of value
		var boyfriend = value['boyfriend-code'],
		number_emails = value["emails"],
		number_chats = value["chat"],
		color_dark = value["color-dark"],
		color_light = value["color-light"];

	  	//get a reference to the canvas
		
	  	var ctx = document.getElementById('canvas').getContext('2d');

		

		// canvas variables

		var circleRadius = 5;
		
		// dot function
	  	var makecircle = function(mouseX, mouseY){
	  		
	  		ctx.fillStyle = color_light;
	  		ctx.strokeStyle = '#fff';
	  		//draw a circle
			ctx.beginPath();
			//  ctx.rect(x, y, width, height)
			ctx.arc(x, y, circleRadius,0, Math.PI*2);  
			ctx.stroke();
			ctx.fill();
			ctx.closePath();

	  	}

	  	



	  	for (var i = 0; i < number_emails; i++){
	  		// var x = windowWidth/1.3-(number_emails-i)*5;
			// var y = windowHeight/3+index*5;
			// console.log(number_emails)

			var plots ;
			var angleIncrease = (2 * Math.PI)/plots,
			plotX = 200,
			plotY = 200;
			
			
			// numberCircles = number_emails/plots;
			if (index == 0){
				r = 10+ i*0.5;
				plots = 20;
			} else if (index == 1){
				r = 30 + i*0.5;
				plots = 30;
			} else if (index == 2){
				r = 50 + i*0.5;
				plots = 40;
			} else {
				r = 100 + i*0.5;
				plots = 50;
			}

			x = r * Math.cos(i*angleIncrease)+plotX,
			y = r * Math.sin(i*angleIncrease)+plotY;

			console.log(angleIncrease)

	  		makecircle();

	  	}

	 //  	canvas.addEventListener('mousemove',function(e){
		//   makecircle(e.clientX, e.clientY);
		// });


		
		
		  



	});


	

});
