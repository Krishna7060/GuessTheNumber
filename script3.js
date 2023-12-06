let randomNumber = Math.floor(Math.random() * 100) + 1;
const submit = document.querySelector('#submit');
const userinput = document.querySelector('#userinput');
const previousGues = document.querySelector('#guesslot');
const remainingGues = document.querySelector('#remaining');
const LorHi = document.querySelector('#LorHi');
const p = document.createElement('p');
let prev = [];
let numguess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        const guess = parseInt(userinput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    prev.push(guess);
    displayGuess(guess);
    checkGuess(guess);

    if (numguess >= 10 || guess === randomNumber) {
        endGame();
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('Congratulations! You guessed the correct number.');
    } else if (guess < randomNumber) {
        displayMessage('Number is too low.');
    } else {
        displayMessage('Number is too high.');
    }
}

function displayGuess(guess) {
    userinput.value = '';
    previousGues.innerHTML += `${guess} `;
    numguess++;
    remainingGues.textContent = 10 - numguess;
}

function displayMessage(message) {
    LorHi.textContent = message;
}

function endGame() {
    userinput.setAttribute('disabled', true);
    p.classList.add('button');
    p.innerHTML = '<button id="newgame">Start New Game</button>';
    document.getElementById('stratover').appendChild(p);
    playGame = false;
    
    document.getElementById('newgame').addEventListener('click', function() {
        resetGame();
    });
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prev = [];
    numguess = 1;
    remainingGues.textContent = 10;
    previousGues.innerHTML = '';
    LorHi.textContent = '';
    userinput.removeAttribute('disabled');
    document.getElementById('stratover').removeChild(p);
}
