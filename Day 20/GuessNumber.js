let randomNumber =  parseInt(Math.random()*10+1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const previousgusses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');
let preGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const userGuess = parseInt(userinput.value);
        validGuess(userGuess)
    })
}

function validGuess(guess) {
    if (isNaN(guess)){
        alert("Please Enter a valid Number");
    } else if( guess < 0) {
        alert("Please Enter a Larger then 1");
    } else if( guess > 10) {
        alert("Please Enter a smaller then 10");
    } else {
        preGuess.push(guess)
        if (numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if (guess === randomNumber){
        displayMessage("You Guess it Right.");
        endGame();
    } else if(guess < randomNumber) {
        displayMessage("You Guess it lower");
    } else if(guess > randomNumber) {
        displayMessage("You Guess it Higher");
    }
}

function displayGuess(guess) {
    userinput.value = "";
    previousgusses.innerHTML += `${guess}   `;
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userinput.value = "";
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame" style="background-color: blue ">Start New Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click', function(e){
        randomNumber =  parseInt(Math.random()*10+1);
        preGuess = [];
        numGuess = 1;
        previousgusses.innerHTML = "";
        lastResult.innerHTML = `${11 - numGuess}`
        userinput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    });
}