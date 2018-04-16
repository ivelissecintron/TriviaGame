// start button timer starts the game and the timer ticking down
// when the timer is done alert all done and documents correct & incorrect & unanswered
// done button calculates the number of correct and incorrect answers
//* You'll create a trivia form with multiple choice or true/false options (your choice).
//* The player will have a limited amount of time to finish the quiz. 
//* The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
//* Don't let the player pick more than one answer per question.
//* Don't forget to include a countdown timer.
//* Get music to play at the end of the game

document.getElementById('timer').innerHTML =
  03 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}