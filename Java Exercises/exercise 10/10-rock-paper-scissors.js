//we can use "||" - or symbol to get the same result as below
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/* checking if 'score === null' => same syntax is '!score'
if (!score) {
score = {
  wins: 0,
  losses: 0,
  ties: 0
};
}
*/
/*get local storage data to keep after refresh
console.log(JSON.parse(localStorage.getItem('score')));*/

function playGame(playerMove) {
const computerMove = pickComputerMove ();

let result = ''

if (playerMove === 'scissors') {
    if (computerMove === 'Rock') { 
    result = 'You Lose';
  } else if (computerMove === 'Paper') { 
    result = 'You Win';
  } else if (computerMove === 'Scissors') { 
    result = 'Tie';
  }
  

} else if (playerMove === 'paper') {
  if (computerMove === 'Rock') { 
    result = 'You Win';
  } else if (computerMove === 'Paper') { 
    result = 'Tie';
  } else if (computerMove === 'Scissors') { 
    result = 'You lose';
  }

  
} else if (playerMove === 'rock') {
  
  if (computerMove === 'Rock') { 
    result = 'tie';
  } else if (computerMove === 'Paper') { 
    result = 'You Lose';
  } else if (computerMove === 'Scissors') { 
    result = 'You Win';
  }
} 

if (result === 'You Win') {
  score.wins += 1;
} else if (result === 'You Lose') {
  score.losses += 1;
}else if (result === 'Tie') {
  score.ties += 1;
}
//store data in local storage to keep after refresh
localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves').innerHTML
= ` you 
<img src="${playerMove}-emoji.png" class="move-icon">
<img src="${computerMove}-emoji.png" class="move-icon">
computer`;



}

function updateScoreElement() {
document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;


}

function pickComputerMove () {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'Rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'Paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'Scissors';
}
//returning value from a function
//anything after Return doesn't run
return computerMove;

}
