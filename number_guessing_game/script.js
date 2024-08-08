let guessAgain = document.getElementById('guessAgain');
let prevGuess = document.getElementById('prevGuess');
let guessCount = document.getElementById('guessCount');
let submitGuess = document.getElementById('submitGuess');
let userGuess = document.getElementById('userGuess');
let count  = 0
let computerGuess = Math.floor(Math.random() *100) + 1

submitGuess.addEventListener('click', () => {
    let guessArray = [];

    
    if (userGuess.value === ""){
        guessAgain.style.color='red';
        guessAgain.textContent = "Plz enter a value"
    }

    else if (isNaN(Number(userGuess.value))){
        guessAgain.style.color='red';
        guessAgain.textContent = "Plz enter a number"
    }
   
    else{
        guessArray.push(userGuess.value);

        prevGuess.textContent += guessArray + " ";
        count += 1
        guessCount.textContent = 10 - count;
        if (Number(userGuess.value) === computerGuess){
            guessAgain.style.color='green';
            guessAgain.textContent = "Congartulation you won";
            
        }
    
        else if (Number(userGuess.value) > computerGuess){
            guessAgain.style.color='red';
            guessAgain.textContent = "Guess your high try again";

        }
    
        else if ((Number(userGuess.value) < computerGuess)){
            guessAgain.style.color='red';
            guessAgain.textContent = "Guess is low try again"
            
        }
        

    }
    
});





          