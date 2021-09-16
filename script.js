'use strict';

console.log(document.querySelector('.message').textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.check').style.display = 'inline-block';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  //   document.querySelector('.number').textContent = secretNumber;
});

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      'Enter a number between 1 to 20';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Answer';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('.number').textContent = secretNumber;
    this.style.display = 'none';
    highScore = Math.max(score, highScore);
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High';
    score--;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low';
    score--;
  } else if (!guess) {
    document.querySelector('.message').textContent = 'Enter a number to guess';
  }
  document.querySelector('.score').textContent = score;
  if (score == 0) {
    document.querySelector(
      '.message'
    ).textContent = `Wrong answer\r\nYou are out of chances\r\nclick 'Again!' to try again`;
    document.querySelector('body').style.backgroundColor = 'red';
    this.style.display = 'none';
  }
});
