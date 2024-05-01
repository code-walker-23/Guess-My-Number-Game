'use strict';
/* console.log(document.querySelector('.message').textContent);
// Javascript is a dialect of the ECMAScript standard. ECMAScript is a standard for scripting languages. JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language

document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document .querySelector('.guess').value);
document .querySelector('.guess').value = 27;
console.log(document .querySelector('.guess').value); */

/* document.querySelector('.btn check'); 
document .querySelector('.guess').value = 27;
console.log(document .querySelector('.guess').value); */


/* document.querySelector('.check').addEventListener('click',function(){
  console.log(document.querySelector('.guess').value);
  console.log(document.querySelector('.message').textContent = '🎉Corerct Number');
}); */

/*console.log(document .querySelector('.guess').value);  */

// user input is a string so we need to convert it to a number.

// Storing a secret number.


document.querySelector('.check').addEventListener('click',function(){
  
  const secretNumber = Math.trunc(Math.random()*20)+1; 
  console.log(secretNumber);

  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  let score = 20;
  

  if(!guess){

      document.querySelector('.message').textContent = '⛔ No Number!';

  } else if(guess === secretNumber){
    
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.message').textContent = '🎉 Correct Number';
      score += 1;
      document.querySelector('.score').textContent = score;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

    if(score > Number(document.querySelector('.highscore').textContent)){
      document.querySelector('.highscore').textContent = score;
    }

  } else if(guess > secretNumber){

    if(Number(document.querySelector('.score').textContent) === 1){
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    } else{
      document.querySelector('.message').textContent = '📈 Too High';
      score -= 1;
      document.querySelector('.score').textContent = score;
    }
    
  } else{

    if(Number(document.querySelector('.score').textContent) === 1){
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost the game';
    } else{
      document.querySelector('.message').textContent = '👇 Too Low';
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

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

});


