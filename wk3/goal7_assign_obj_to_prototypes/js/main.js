/**
 * Name: Angelena Ward
 * Date: 11/16/2013
 * Goal: Goal 7
 */
 
(function(){
	
	//array this will holds five names	
	var names = ['James', 'Robert', 'Mary', 'Tina', 'Jaime'];
	console.log(names);
	
	//will be populate by the  for loop.
	var people = [];
	console.log('people array');
	
	//for loop will populate the people array with 3 random names, without repeating any
	for(var i = 0; i < 3; i++){
	 	var index =  Math.floor(Math.random() * names.length);
		var person = new Person(names[index], i + 1);
	
		//push name to names array then slice the used name
		people.push(person);
		names.splice(index, 1);
	};
	console.log('for loop');
	
	//calls runUpdate function every 30 times per sec
	var interval = setInterval(runUpdate, 1000/30);	
	console.log('interval');


	//outputs the person's name and person's job, on the web page.
	function populateHTML(){
         for(var i= 0; i<people.length;i++){
            document.querySelector("#r"+(i+1)+"c1").innerHTML = people[i].name;
            document.querySelector("#r"+(i+1)+"c2").innerHTML = people[i].job;
         }
    }
	populateHTML();

	//Once all the Person instances are in the people array, the program will loop through each person and run the prototype 	update() function. The loop should execute in the runUpdate() function that is called from the setInterva
	function runUpdate (){
		people.forEach(function(element){
			element.upDate();
		});
	}
	console.log('runUpdate');

	populateHTML();
	
	clearInterval(interval);

})();
	
 