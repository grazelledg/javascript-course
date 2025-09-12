'use strict';

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('highscore');
const guessEl = document.querySelector('.guess');
document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

////////////////////////////////////
// UI Helpers

function setMessage(text) {
  messageEl.textContent = text;
}
function setNumber(value) {
  numberEl.textContent = value;
}
function setScore(value) {
  scoreEl.textContent = value;
}
function setHighscore(value) {
  highscoreEl.textContent = value;
}
function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}
function clearInput() {
  guessEl.value = '';
}




//DOM elements selection
console.log(messageEl);
console.log(messageEl.textContent);
messageEl.textContent = 'Correct Number!';
messageEl.textContent = 'Hello from Javascript';

console.log ('Score element:', scoreEl);
scoreEl.textContent = '50';

// numberEl.textContent = 15;

// highscoreEl.textContent =10;

guessEl.value = 20;

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MINIMUM_NUMBER;
console.log(secretNumber);

let score = START_SCORE;
let highscore = 0;

function resetGameState() {
    start =START_SCORE;
    secretNumber = Mathh.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitual() {
    setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
}
  
renderInitialUI(); 


//Basic Game Logic 
document.querySelector('.check').addEventListener('click', function() {
    console.log('Check button is clicked!');

const guess = Number(document.querySelector('.guess').value);
console.log('Players guessed:', guess);

if (!guess) return setMessage('Please input a number!');

if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent = 'Number must be between 1 and 20!';
    return;
}

if (guess === secretNumber ) {
    console.log ('Youre guess is correct!');
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }

    } else if (guess > secretNumber) {
    console.log ('Youre guess is too high!');
    document.querySelector('.message').textContent = 'Too High!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1){
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
    }
} else if (guess < secretNumber) {
    console.log ('Youre guess is too low!');
    document.querySelector('.message').textContent = 'Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1){
        document.querySelector('.message').textContent = 'You kkost!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
    }
}
});


document.querySelector('.again').addEventListener('click', function() {
    console.log('Play again button clicked!');
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = '';
});





// Visual feedback - change styles based on game state

if (guess === secretNumber) {
  document.body.style.backgroundColor = 'green';
}

if (score < 1) {
  document.body.style.backgroundColor = 'maroon';
}

document.querySelector('.again').addEventListener('click', function () {
  document.body.style.backgroundColor = '';
});

////////////////////////////////////
// Final polish - professional finishing touches

if (guess === secretNumber) {

  document.querySelector('.message').textContent = '🎉 Game Over!';
  document.querySelector('.guess').value = '';
}













