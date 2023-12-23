'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0; //  0/1
let playing = true;

btnRoll.addEventListener('click', () => {
  if (playing) {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    console.log(diceValue);
    diceEl.classList.remove('hidden');
    diceEl.setAttribute('src', `dice-${diceValue}.png`);
    if (diceValue !== 1) {
      currentScore += diceValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer == 0 ? 1 : 0;
      currentScore = 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 30) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      btnRoll.classList.add('hidden') 
      btnHold.classList.add('hidden') 
    }
    else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer == 0 ? 1 : 0;
      currentScore = 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
}); 

btnNew.addEventListener('click', () => {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner')
  player1El.classList.remove('player--winner')
  player0El.classList.add('player--active')
  player1El.classList.remove('player--active')
  diceEl.classList.add('hidden');
  btnRoll.classList.remove('hidden') 
  btnHold.classList.remove('hidden') 
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0; //  0/1
  playing = true;

});
