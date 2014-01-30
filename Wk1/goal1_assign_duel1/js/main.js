/**
 Name: Angelena Ward	
 Date: January 8, 2014	
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
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
        alert(fighter1+":"+ fighter1Health+"  *START*  "+ fighter2 +":"+ fighter2Health);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1Damage * .5;
            var minDamage2 = fighter2Damage * .5;
            var f1 = Math.floor(Math.random()*(fighter1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2Damage-minDamage2)+minDamage2);

            //inflict damage
            fighter1Health-=f1;
            fighter2Health-=f2;

            console.log(fighter1+": "+ fighter1Health + " " + fighter2 +":"+ fighter2Health);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(fighter1 +":"+ fighter1Health+"  *ROUND "+round+" OVER"+"*  "+ fighter2 +":"+ fighter2Health);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (fighter1 < 1 && fighter2Health < 1)
        {
            result = "You Both Die";
        } else if(fighter1Health < 1){
            result = fighter2+" WINS!!!"
        } else if (fighter2Health < 1)
        {
            result = fighter1 +" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();