/**
 Name: Angelena Ward	
 Date: January 8, 2014	
 Assignment: Goal 1: Duel 1
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name
    var fighter1 = "Spiderman";
    var fighter2 = "Batman";

    //player damage
    var fighter1Damage = 20;
    var fighter2Damage = 20;

    //player health
    var fighter1Health = 100;
    var fighter2Health = 100;

    //initiate round
    var round=0;

    function fight(){
		console.log('in the fight function');
		
        alert(fighter1+":"+ fighter1Health+"  *START*  "+ fighter2 +":"+ fighter2Health);
		
        for (var i = 0; i < 10; i++) {
			
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1Damage * .5;
            var minDamage2 = fighter2Damage * .5;
            var f1 = Math.floor(Math.random()*(fighter1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2Damage-minDamage2)+minDamage2);
			
			//console.log(f1);
			//console.log(f2);
			
            //inflict damage
            fighter1Health-=f1;
            fighter2Health-=f2;

            console.log(fighter1+": "+ fighter1Health + " " + fighter2 +":"+ fighter2Health);

            //check for victor
            var results = winnerCheck();
            console.log(results);
			
            if (results === "no winner") {
                round++;
                alert(fighter1 +":"+ fighter1Health+"  *ROUND "+round+" OVER"+"*  "+ fighter2 +":"+ fighter2Health);

            } else{
                alert(results);
                break;
            };

          };
    };

    function winnerCheck(){
		console.log('in winnerCheck FN');
		
        var results = "no winner";
        if (fighter1 < 1 && fighter2Health < 1)
        {
            results = "You Both Die";
        } else if(fighter1Health < 1){
            results = fighter2+" WINS!!!"
        } else if (fighter2Health < 1)
        {
            results = fighter1 + "WINS!!!"
        };
       return results;
    };

    /*******  The program gets started below *******/
	console.log('program starts');
    fight();

})();