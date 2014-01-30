/*
Name: Angelena Ward
Date: 01/18/2014
assignment: Goal 4 Assigntment: Duel3
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");
	
	//fight button onclick	
	var fightBtn = document.querySelector('#fight_btn a');
	console.log(fightBtn);
	
	fightBtn.onclick = function(e){
		
		var rounds = document.getElementById("round").innerHTML = 'ROUND '+ round + ' Complete';
		fight();
		
		e.preventDefault();
		return false;
	}
	
	//object with three properties(keys) created for both fighters. 
	fighter1 = {name:'Spiderman', damage:20, health:100};
    fighter2 = {name: 'Batman', damage:20, health:100};
	console.log(fighter1);
	console.log(fighter2);
	
	//input fighter 1 name and health       	
	var player1 = document.querySelector('#kabal p');
	console.log('Spiderman HTML');
			
	//input fighter 2 name and health
	var player2 = document.querySelector('#kratos p');
	console.log('Batman HTML');
	
    var round = 0;
	
	//fight funciton
    function fight(){
		
		//output results
		player1.innerHTML = 'Spiderman: ' + fighter1.health;
		player2.innerHTML = 'Batman: ' + fighter2.health;
    	console.log('Spiderman vs Batman');
		
		//random formula is - Math.floor(Math.random() * (max - min) + min);
        var minDamage1 = fighter1.damage * .5;
        var minDamage2 = fighter2.damage * .5;
        var f1 = Math.floor(Math.random()*(fighter1.damage-minDamage1)+minDamage1);
        var f2 = Math.floor(Math.random()*(fighter2.damage-minDamage2)+minDamage2);

   		//inflict damage
       	fighter1.health-=f1;
     	fighter2.health-=f2;
       	console.log(fighter1.health + ', ' + fighter2.health);
		

        //check for victor
        var result = winnerCheck();
		
      	if (result === "no winner")
      	{
			round++;

    	} else {
         	return result;
       	}
	};
	
	//winnerCheck() funciton
    function winnerCheck(){
		
		var results = document.querySelector('#kratos p');
		var result = "no winner";
        
        if (fighter1.health < 1 && fighter2.health < 1) {
            results.innerHTML =  "You Both Die";
			player1.innerHTML = ' ';
			fightBtn.innerHTML = 'DONE'
			
        } else if(fighter1.health < 1) {
            results.innerHTML = fighter2.name +" WINS!!!";
			player1.innerHTML = ' ';
			fightBtn.innerHTML = 'DONE'
			
        } else if (fighter2.health < 1) {
            results.innerHTML = fighter1.name +" WINS!!!";
			player1.innerHTML = ' ';
			fightBtn.innerHTML = 'DONE'
		};
		
		console.log(results); 
		return result;
	};
	
	
	/*******  The program gets started below *******/
	fight();
			
})();// JavaScript Document
