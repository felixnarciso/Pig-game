'use strict';

// Selecting elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const Current0El = document.getElementById(`current--0`);
const Current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`);
const buttonNew = document.querySelector(`.btn--new`);
const buttonRoll = document.querySelector(`.btn--roll`);
const buttonHold = document.querySelector(`.btn--hold`);

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
buttonRoll.addEventListener(`click`, function(){
	const dice = Math.trunc(Math.random() * 6) + 1;

	diceEl.classList.remove(`hidden`);
	diceEl.src = `dice-${dice}.png`;

	if (dice !== 1)
	{
		currentScore += dice;
		document.getElementById(`current--${activePlayer}`).textContent = currentScore;
	}else
	{
		document.getElementById(`current--${activePlayer}`).textContent = 0;
		currentScore = 0;
		activePlayer = activePlayer === 0 ? 1 : 0;
		player0El.classList.toggle(`player--active`);
		player1El.classList.toggle(`player--active`);
	}
})