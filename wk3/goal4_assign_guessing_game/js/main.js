/**
 * GUESSING GAME:
 *
 * Created By: Angelena Ward
 * Date: 01/20/2014
 * 
 * GUESSING GAME
 */

//Game variables
(function (){
	
	//store a random interger within the range of 1 - 10
	var randomNumber = Math.floor(Math.random()*(10) + 1);
	console.log('players guess');
	
	//refernce the DOM elements or 1 object literal
	var dom = {
		input: document.querySelector('#input'),
		output: document.querySelector('#output'),
		button: document.querySelector('button')
	};
	console.log('dom');
	
	//addEventListner on guess button for click event
	var maxGuess = 3;
	var guessesMade = 0;
	var guess = 0;

	dom.button.addEventListener('click', clickHandler, false);
	console.log('Event listener');
	
	//button
	function clickHandler(){
		validateInput();
	}
	
	//validates user input and display correct message
	var validateInput = function(){
		maxGuess--;
		guessesMade++;
		
	 	guess = parseInt(dom.input.value);
		console.log('validate input');
		
		//if guess is not a number or not between 1-10 display enter a number
		if (isNaN(guess) || guess < 1 || guess > 10){
			dom.output.innerHTML = "Enter a number between 1-10.";
		
		//if guess is right disable button
		}else if (guess === randomNumber){
			dom.output.innerHTML = "You got it! " + "Yes it's: " + randomNumber;
			console.log('You got it', + guess);
			dom.button.removeEventListener('click', clickHandler, false);
		
		//if guess is lower than number display too low					
		}else if (guess < randomNumber){
			dom.output.innerHTML = "That's too low. " + "Guess: " + guess + " Guesses : " + guessesMade;
			console.log("That's too low", + guess);
		
		//if guess is higher than number display to high	
		}else if (guess > randomNumber) {
			dom.output.innerHTML = "That's too high. " + "Guess: " + guess + " Guesses: " + guessesMade; 
			console.log("That's too high", + guess);
		}
		
		//if maxGuess is less than 1 game over then disable button
		if (maxGuess < 1){
			dom.output.innerHTML = "GAME OVER! No more guesses left! " + "<br>"
        	+ "The number was " + randomNumber;	
			dom.button.removeEventListener('click', clickHandler, false);
		}
	};//end function
	
})();