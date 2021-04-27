'use strict';
/*
document.querySelector('.message').textContent = 'Testando';

document.querySelector('.number').textContent = 25;
document.querySelector('.score').textContent = 30;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

//Game Logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Não há numero!';

    //When the player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Número Correto!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Está Alto';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Você perdeu o jogo!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF6347';
      document.querySelector('.number').style.width = '30rem';
    }

    //When the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Está baixo';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Você perdeu o jogo!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF6347';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

//Reset (again) Button
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 10;
  document.querySelector('.message').textContent = 'Comece a adivinhar...🤞';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
});
