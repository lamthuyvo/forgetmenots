$(document).ready(function() {



    	
	        	


	    var canvas = $("#dots");
	    var context = canvas.get(0).getContext("2d");
	   
	    var windowWidth = $(window).get(0).innerWidth, 
	    	windowHeight = $(window).get(0).innerHeight,
			marginX = 10,
			marginY = 10,
			columnWidth = $('.content').width(),
			leftX = (windowWidth - columnWidth)/2 ;


	    canvas.attr("width", columnWidth);
	    canvas.attr("height", windowHeight);
	    canvas.css("margin-left", leftX);




	    var canvasWidth = columnWidth;
	    var canvasHeight = 200;
	    
	    




	    // $(window).resize(resizeCanvas);

	    function resizeCanvas() {
	        // canvas.attr("width", $(window).get(0).innerWidth);
	        canvas.attr("height", $(window).get(0).innerHeight);
	        canvas.css("opacity", 1);


	        canvasWidth = canvas.width();
	        canvasHeight = canvas.height();
	    };

	     $('#pandora').on("click", function(){
	     	resizeCanvas();

	     })

	    function animate() {
            update();
            draw();
            setTimeout(animate, 33);
        }
        var Sphere = function (x, y, radius, mass, vX, vY) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.mass = mass;

            this.vX = vX;
            this.vY = vY;

            this.updatePosition = function () {
                this.x += this.vX;
                this.y += this.vY;
            };

            this.checkBoundaryCollision = function () {
                if (this.x - this.radius < 0) {
                    this.x = this.radius;
                    this.vX *= -1;
                } else if (this.x + this.radius > canvasWidth) {
                    this.x = canvasWidth  - this.radius;
                    this.vX *= -1;
                }

                if (this.y - this.radius < 0) {
                    this.y = this.radius;
                    this.vY *= -1;
                } else if (this.y + this.radius  > canvasHeight) {
                    this.y = canvasHeight - this.radius;
                    this.vY *= -1;
                }
            }
        }

        // resizeCanvas();

	    var spheresLength = 1924;
	    var spheres = new Array();
	    
	    function loadContent() {
	        for (var i = 0; i < spheresLength; i++) {
	            var x = 20 + (Math.random() * (canvasWidth - 40));
	            var y = 20 + (Math.random() * (canvasHeight - 40));

	            var radius = 3;
	            var mass = radius / 2;

	            var vX = Math.random() * 4 - 2;
	            var vY = Math.random() * 4 - 2;

	            spheres.push(new Sphere(x, y, radius, mass, vX, vY));
	        };
	        animate();
	    }
	    loadContent();

        


		function update() {
		    for (var i = 0; i < spheresLength; i++) {
		        var sphere1 = spheres[i];

		        for (var j = i + 1; j < spheresLength; j++) {
		            var sphere2 = spheres[j];
		            var dX = sphere2.x - sphere1.x;
		            var dY = sphere2.y - sphere1.y;
		            var distance = Math.sqrt((dX * dX) + (dY * dY));

		            if (distance < sphere1.radius + sphere2.radius) {
		                var angle = Math.atan2(dY, dX);
		                var sine = Math.sin(angle);
		                var cosine = Math.cos(angle);

		                var x = 0;
		                var y = 0;
		                var xB = dX * cosine + dY * sine;
		                var yB = dY * cosine - dX * sine;

		                var vX = sphere1.vX * cosine + sphere1.vY * sine;
		                var vY = sphere1.vY * cosine - sphere1.vX * sine;

		                var vXb = sphere2.vX * cosine + sphere2.vY * sine;
		                var vYb = sphere2.vY * cosine - sphere2.vX * sine;
		                var vTotal = vX - vXb;
		                vX = (
		        (sphere1.mass - sphere2.mass) * vX + 2 * sphere2.mass * vXb)/ (sphere1.mass + sphere2.mass);

		                vXb = vTotal + vX;

		                xB = x + (sphere1.radius + sphere2.radius);

		                sphere1.x = sphere1.x + (x * cosine - y * sine);
		                sphere1.y = sphere1.y + (y * cosine + x * sine);

		                sphere2.x = sphere1.x + (xB * cosine - yB * sine);
		                sphere2.y = sphere1.y + (yB * cosine + xB * sine);

		                sphere1.vX = vX * cosine - vY * sine;
		                sphere1.vY = vY * cosine + vX * sine;

		                sphere2.vX = vXb * cosine - vYb * sine;
		                sphere2.vY = vYb * cosine + vXb * sine;
		            }

		        }

		        sphere1.updatePosition();
		        sphere1.checkBoundaryCollision();


		    }
		}

        function draw() {
        	context.clearRect(0, 0, canvasWidth, canvasHeight);
        	var categoryArray=['Boyfriend 1','Boyfriend 2','Boyfriend 3','Boyfriend 4','Boyfriend 5'],
	        	gchatArray=[985,2461,7684, 0, 2989],
	        	emailArray=[273,61,604,860,126],
	        	draftsArray=[6,3,5,7,5],
	        	chronologyArray=[1,2,3,4,5],
	        	colorsArray = ["#f563f1","#00ceff","#01f7b6","#dbbc3d","#cccccc"];

            // for loop for circles
            for (var index2 = 0; index2 < 1924; index2++) {

            	if (index2 < emailArray[0]){
            		context.fillStyle = colorsArray[0];
            	} else if (index2 < emailArray[0] +emailArray[1] && index2 > emailArray[0]){
            		context.fillStyle = colorsArray[1];

            	} else if (index2 < emailArray[0] + emailArray[1] + emailArray[2]&& index2 > emailArray[0] + emailArray[1]){
            		context.fillStyle = colorsArray[2];

            	} else if (index2 < emailArray[0] + emailArray[1] + emailArray[2] + emailArray[3] && index2 > emailArray[0] + emailArray[1]+ emailArray[2]){
            		context.fillStyle = colorsArray[3];
            	}else if (index2 < emailArray[0] + emailArray[1] + emailArray[2] + emailArray[3] + emailArray[4] && index2 > emailArray[0] + emailArray[1]+ emailArray[2] + emailArray[3]){
            		context.fillStyle = colorsArray[4];
            	}
	          
    			
            	
                var sphere = spheres[index2];

                context.beginPath();
                context.arc(sphere.x, sphere.y, sphere.radius, 0, Math.PI * 2);
                context.closePath();
                context.fill();

	        }

	       
        }

           


            

       




});
