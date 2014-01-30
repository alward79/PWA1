/**
 * Created by: Angelena Ward
 * Date: 01/26/14 
 * Class: PWA1
 * Goal: Goal9
 */

console.log("start canvas");

(function(){
	
	//Create a dynamic Canvas:
	var canvas = document.createElement("canvas");   	
    canvas.width = 400;
    canvas.height =300;
	
	//add canvas to the DOM, using the .appendChild method
	document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
	console.log('canvas: ' ,canvas)
	
	//Create a variable that stores an array of 4 numbers, from 1 to 100. This will represent 4 grades a student may have 		    received, and another variable that stores the maximum height a bar can be in pixels. Initialize the variable to 200 pixels
	var chartData = [85, 95, 75, 100];
	var maxBarHeight = 200;
  	console.log('chartData: ', chartData + ' and maxBarHeight: ' , maxBarHeight);

	//Create a new image container set the .src, then create the image and wait for it to load before instantiating "drawImage". 	    Instantiate the "drawImage" with the parameters of (img, 0, 0, “canvas width”, “canvas height”).
	var img =  new Image();
    img.src = "images/bg.jpg";
    img.addEventListener("load", function(){
     ctx.drawImage(img, 0, 0, 400, 300)
        drawBars();
    },false);
	console.log('image: ', img);

	//Function “drawBars”, set the font, create a FOR loop which will loop through each number in the “chartData” array and draw            	    a rectangle on the “images/bg.jpg”.
    var drawBars = function(){
      ctx.font ="14px Georgia";
        for(var i = 0, maxdata = chartData.length; i < maxdata; i++){
         ctx.beginPath();
         ctx.fillStyle ="rgba(100, 200, 200, 0.75)";
            var height = maxBarHeight * chartData[i] / 100;
            ctx.rect(i * 80 + 90, 270-height, 50, height);
            ctx.fill();
            ctx.fillStyle ="rgb(255,255,255)";
            ctx.fillText(chartData[i], i * 85 + 100, 50);
            drawChartText();
        }
		console.log('chartData length: ' ,chartData.length +  ' and height: ', height);
	}
	
	//Function “drawChartText”, Write a label below each bar item in the image. Create a FOR loop to loop through the “xAxisData”  	    array, and use the .fillText to display the text under bars.
	var  drawChartText = function(){
 		ctx.font="20px Georgia";
		ctx.fillStyle = "rgb(255, 255, 255)";
  		ctx.fillText("TEST GRADES", 30, 30);
		var xAxisData =["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4"];
       	ctx.font="14px Georgia";
       	ctx.fillStyle="rgb(0, 0, 0)";
       	for(var i=0, max = xAxisData.length; i<max; i++){
       		ctx.fillText(xAxisData[i], i*80+95,290);
       	}
		console.log('xAxisData: ', xAxisData);
	} 

})();