'use strict';
//document is a object and querySelector is one of it's method

// console.log(document.querySelector('.message'); // return complete element { <>...</> }
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.guess').value=33; // input-field
// document.querySelector('.message').textContent='Correct Number! 🎉';

//trunc means 🔪 cut/round-off
let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
  // the x is always going to be a string 
  // but that string can only contain number values else x an empty string
  // this is because the input field type is number 
  let x  = document.querySelector('.guess').value
  console.log(x, typeof x);

  const guess = Number(document.querySelector('.guess').value);

  
  if (!guess) {
    document.querySelector('.message').textContent = 'Field Is Empty';
  } 
  else if (guess === number) {

    if(score>highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;    
      }
      
    document.querySelector('.number').textContent = guess;
    document.querySelector('.message').textContent = 'Correct Number! 🎉';

    //This changes the inline style // written in element
    //Property should always be written as a string
    // background - color = backgroundColor (camel case)
    document.querySelector('body').style.backgroundColor = '#20072e';
    document.querySelector('.number').style.width = '30rem';
  }

  else if(guess!=number){
    if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 
        guess>number?'📈 Guess is High':'📉 Guess is Low';
      } 
    else {
      document.querySelector('.message').textContent = 'You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
//   in other words -->
//   else if (guess > number) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('.message').textContent = '📈 Guess is High';
//     } else {
//       document.querySelector('.message').textContent = 'You Lost The Game';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < number) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('.message').textContent = '📉 Guess is Low';
//     } else {
//       document.querySelector('.message').textContent = 'You Lost The Game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value='';
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number)
});



