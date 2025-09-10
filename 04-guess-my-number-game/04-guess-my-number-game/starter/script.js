'use strict';

//DOM elements selection
const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);
messageEl.textContent = 'Correct Number!';
messageEl.textContent = 'Hello from Javascript';

const scoreEl = document.querySelector('.score');
console.log ('Score element:', scoreEl);
scoreEl.textContent = '50';

const numberEl = document.querySelector('.number');
// numberEl.textContent = 15;

const highscoreEl = document.querySelector('guess');
// highscoreEl.textContent =10;

const guessEl = document.querySelector('.guess');
guessEl.value = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20; 
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Ga,e state initialized');

//Basic Game Logic 
document.querySelector('.check').addEventListener('click', function() {
    console.log('Check button is clicked!');

const guess = Number(document.querySelector('.guess').value);
console.log('Players guessed:', guess);

if (!guess) {
    document.querySelector('.message').textContent = 'Please input a number!';
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








