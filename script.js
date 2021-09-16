'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// To change the text of a particular HTML element
const changeTxtContent = function (identifier, txt) {
  document.querySelector(identifier).textContent = txt;
};

// To change the css property of certain HTML element.
const editCss = function (identifier, property, value) {
  document.querySelector(identifier).style[property] = value;
};

// reseting the whole page if user wants to play again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  changeTxtContent('.message', 'Start guessing...');
  document.querySelector('.check').style['display'] = 'inline-block';
  editCss('body', 'backgroundColor', '#222');
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  editCss('.number', 'width', '15rem');
  changeTxtContent('.number', '?');
  document.querySelector('.score').textContent = score;
  changeTxtContent('.score', '?');
});

// check the input value entered by the user
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // this if else covers all the edge cases that can be entered by the user
  if (!guess) changeTxtContent('.message', 'No Number!');
  else if (guess > 20 || guess < 1) {
    changeTxtContent('.message', 'Enter a number between 1 and 20');
  } else if (guess === secretNumber) {
    changeTxtContent('.message', 'Correct Answer');
    editCss('body', 'backgroundColor', '#60b347');
    editCss('.number', 'width', '25rem');
    changeTxtContent('.number', secretNumber);
    editCss('.check', 'display', 'none');
    highScore = Math.max(score, highScore);
    changeTxtContent('.highscore', highScore);
  } else if (guess > secretNumber) {
    changeTxtContent('.message', 'Too High');
    score--;
  } else if (guess < secretNumber) {
    changeTxtContent('.message', 'Too Low');
    score--;
  }
  // change the value of score if user entered wrong valid value
  document.querySelector('.score').textContent = score;

  // if the user has completed his 20 given chance then the user looses
  if (score == 0) {
    changeTxtContent('.message', 'Wrorng Answer');
    document.querySelector('body').style.backgroundColor = 'red';
    editCss('.check', 'display', 'none');
  }
});
