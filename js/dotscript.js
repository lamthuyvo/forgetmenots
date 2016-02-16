$(document).ready(function() {

	// script for running type
	function type(){
		$("#typed").typed({
		    stringsElement: $('#typed-strings'),
		    typeSpeed: 30,
		    backDelay: 500,
		    loop: false,
		    contentType: 'html', // or text
		    // defaults to false for infinite loop
		    loopCount: false  
		});
	}

	type();


	
	// adjust canvas height
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();


	// set height for all sections to screen height
	$('.section').css("min-height", windowHeight);

	// set chart height
	var forgetmenot1 = $('#forget-me-nots-1').height();
	var	forgetmenot2 = $('#forget-me-nots-2').height();

    $('#chart-container').css("height", windowHeight - (forgetmenot1 + forgetmenot2 +  75));

	$('#rabbit-hole').on("click", function(){
		$('html,body').animate({
	        scrollTop: $('#digital-nostalgia').offset().top,
	    }, 800, 'easeOutExpo');
	});

	$('#nostalgia-button').on("click", function(){
		$('html,body').animate({
	        scrollTop: $('#pandoras-box').offset().top,
	    }, 800, 'easeOutExpo');
	});

	$('#pandora').on("click", function(){
		$('html,body').animate({
	        scrollTop: $('#dots').offset().top,
	    }, 800, 'easeOutExpo');
	});

	$('#start').on("click", function(){
		$('html,body').animate({
	        scrollTop: $('#forget-me-nots').offset().top,
	    }, 800, 'easeOutExpo');
	});

	// measure height of content t adjust mouse movement
	var digiNostalgiaHeight = $('#digital-nostalgia').height(),
		introHeight = $("#intro").height();



	$("#intro").css("margin-top", (windowHeight - introHeight)/2)

	var columnWidth1 = $('.content').width(),
		leftX1 = (windowWidth - columnWidth1)/2,
		dotcanvasHeight = windowHeight - digiNostalgiaHeight - 150;


	$('#dot').attr("width", columnWidth1);
	$('#dot').attr("height", dotcanvasHeight);
	$('#dot').css("margin-left", leftX1);



	var canvas1 =document.getElementById("dot"),
    ctx1 = canvas1.getContext("2d");

    var targetX = leftX1 + columnWidth1/2,
	    targetY = dotcanvasHeight/2,
	    x = leftX1 + columnWidth1/3,
	    y = 50,
	    velX = 0,
	    velY = 0,
	    speed = 5;

	function update(){
	    var tx = targetX - x,
	        ty = targetY - y,
	        dist = Math.sqrt(tx*tx+ty*ty),
	        rad = Math.atan2(ty,tx),
	        angle = rad/Math.PI * 180;

	        velX = (tx/dist)*speed,
	        velY = (ty/dist)*speed;
	    
	        x += velX
	        y += velY
	            
	        ctx1.clearRect(0,0,600,1200);
	        ctx1.beginPath();
	        ctx1.fillStyle = "#f563f1";
	        ctx1.arc(x - leftX1 ,y,3,0,Math.PI*2);
	        ctx1.fill();
	    
	    setTimeout(update,10);
	}

	update();


	canvas1.addEventListener("mousemove", function(e){
	    targetX = e.pageX;
	    targetY = e.pageY - $('#dot').offset().top;


	});

	canvas1.addEventListener('touchmove', function(e) {
		targetX = e.pageX;
	    targetY = e.pageY;
	});






});
