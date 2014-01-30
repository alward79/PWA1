/*
	PWA1: Goal8: Simple Library App
*/

(function(){

  	// var to store all the anchors
   	var anchors = document.querySelectorAll('#container a')
    var results = MyLibrary(anchors);

    console.log('Results: ', results);

    // call the each funtion in the library and pass it the anchors
	MyLibrary(anchors).each(function(){

		// change the bg color to gray for each ancho
		this.style.backgroundColor = 'gray';
		
		//"onclick" event to the .each function. When the "onclick" occurs, console.log the "THIS" item.			
		this.onclick = function(e){
		e.preventDefault();
		console.log("THIS: " + this);
    	};

    });

})();  // end wrapper

