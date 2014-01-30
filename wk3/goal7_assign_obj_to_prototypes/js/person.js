/**
 * Name: Angelena Ward
 * Date: 01/24/2013
 * Goal: Goal7
 */
 
 (function(){
	 
	//makes Person object global 
 	window.Person = Person;
	
	//Two variables, "jobs" and "actions" which should be directly on the Person object (static variables)
	Person.jobs = ["teacher","farmer","student","pilot"];
	Person.actions = ["sleeping","eating","working"];
	
	//The Person constructor should also have four properties
	function Person(name, row) {
		console.log('Person: ', name);
		this.name = name;
		this.row = row;
    	this.job = Person.jobs[Math.floor(Math.random() * Person.jobs.length)];
		this.action = Person.actions[Math.floor(Math.random() * Person.actions.length)];
		
		var id = document.getElementById('r' + this.row + 'c3');
		id.innerHTML = this.action;
	};
		
	//This protopyte randomly changes the actions
	Person.prototype.upDate = function(){
		this.action = Math.floor(Math.random()*Person.actions.length);
		var id = document.getElementById("r" + this.row + "c3");
		id.innerHTML = this.action;	
	};
	
	
 })();