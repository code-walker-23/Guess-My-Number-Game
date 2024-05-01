'use strict';


let score = 20;
let highScore = 0;
const secretNumber = Math.trunc(Math.random()*20)+1; 

function displayMessage(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
  const guess = Number(document.querySelector('.guess').value);
  
  // If the input is empty.
  if(!guess){

      displayMessage('⛔ No Number!');

    // If the guess is correct.
  } else if(guess === secretNumber){
    
      document.querySelector('.number').textContent = secretNumber;
      displayMessage('🎉 Correct Number');
      score += 1;
      document.querySelector('.score').textContent = score;

      // Sytling the page.
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      // If the current score is greater than the high score.
      if(score > highScore){
        document.querySelector('.highscore').textContent = score;
      }

    // If the guess is wrong.
  }else if(guess !== secretNumber){

      if(score === 1){

        displayMessage('You lost the game');
        document.querySelector('.score').textContent = 0;
 
      } else{

        displayMessage((guess < secretNumber) ? '👇 Too Low!' : '👆 Too High!');
        score -= 1;
        document.querySelector('.score').textContent = score;
   
    }

  }
  
});

// Implementing Again button.

document.querySelector('.again').addEventListener('click',function(){
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
 
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

});



