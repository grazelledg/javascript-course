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

let score = 40; 
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Ga,e state initialized');

//Basic Game Logic 
document.querySelector('.check').addEventListener('click', function() {
    console.log('Check button is clicked!');

const guess = Number(document.querySelector('.guess').value);
console.log('Players guessed:', guess);

if (guess == secretNumber) {
    console.log ('Youre guess is correct!');
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    } else if (guess > secretNumber) {
    console.log ('Youre guess is too high!');
    document.querySelector('.message').textContent = 'Too High!';
} else {
    console.log ('Youre guess is too low!');
    document.querySelector('.message').textContent = 'Too Low!';
}
});











