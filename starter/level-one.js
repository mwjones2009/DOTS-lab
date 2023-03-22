/*
 * DOTS: Level One
 *
 */
// set the variables 
 var score = 0
 const ball = document.querySelector('.js-ball')
 const scoreDisplay = document.querySelector('.js-score')
 const levelWinner = document.querySelector('.level-winner')

 ball.addEventListener('click', function() {
  console.log('Button 1 clicked')
  newScore = score += 10
  console.log(newScore)
  scoreDisplay.innerText = newScore
  if(newScore >= 100){
    console.log('YoU aRe ThE WINNER!')
  levelWinner.style.opacity ='1'
  }
});