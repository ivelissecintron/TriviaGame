// variable for timer to start at 60
var count = 60;

// variable count of right, wrong, unanswered questions; variable for theme music
var correctCount = 0;
var incorrectCount= 0;
var unansweredCount = 0;
var audio = new Audio("assets/music/theoffice.mp3");

$(document).ready(function(){

// hide containers 
$("#triviaquestionscontainer").hide();
$("#countercontainer").hide();

// start is clicked unhide triviaquestionscontainer and show/start timer 
$("#startbutton").on("click", function(){
    $("#start").hide(); 
    $("#triviaquestionscontainer").show();
    startCountdown ();
    return;
});

// timer countdown starts
function countdown(){
    count--;
    $("#secondtimer").html(count + " Seconds");

        $("#done").on("click", function(){
        count = 0;
        return
    });
    //  if timer is up hide the trivia questions container
    if(count == -1){
        timeUp();
        $("#triviaquestionscontainer").hide();
    }


}
// starts the timer countdown
function startCountdown(){
    setInterval(countdown, 1000);
}

// 
function timeUp(){

    // variable checks for value from radio button
    var q1 = $('input:radio[name="question1"]:checked').val();
    var q2 = $('input:radio[name="question2"]:checked').val();
    var q3 = $('input:radio[name="question3"]:checked').val();
    var q4 = $('input:radio[name="question4"]:checked').val();
    var q5 = $('input:radio[name="question5"]:checked').val();
    var q6 = $('input:radio[name="question6"]:checked').val();
    var q7 = $('input:radio[name="question7"]:checked').val();
    var q8 = $('input:radio[name="question8"]:checked').val();

    if (q1 == undefined){
        unansweredCount++;
        }
    else if (q1 == "D. Stapler"){
        correctCount++;
    }
    else {
        incorrectCount++;
    }

    if (q2 == undefined){
        unansweredCount++;
    }
    else if (q2 == "A. Forever by Chris Brown"){
        correctCount++;
    }
    else {
        incorrectCount++;
    }

    if (q3 == undefined){
        unansweredCount++;
    }
    else if (q3 == "B. Bathroom"){
        correctCount++;
    }
    else {
        incorrectCount++;
    }
    
    if (q4 == undefined){
        unansweredCount++;
    }
    else if (q4 == "A. Meredith"){
        correctCount++;
    }
    else {
        incorrectCount++;
    }

    if (q5 == undefined){
        unansweredCount++;
    }
    else if (q5 == "C. He's trying to find the end of a wire Jim attached to his computer."){
        correctCount++;
    }
    else {
        incorrectCount++;
    }
    
    if (q6 == undefined){
        unansweredCount++;
    }
    else if (q6 == "B. George Forman Grill"){
        correctCount++;
    }
    else {
        incorrectCount++;
    }

    if (q7 == undefined){
        unansweredCount++;
    }
    else if (q7 == "C. Suck On This"){
        correctCount++;
    }
    else {
        incorrectCount++;
    }

    if (q8 == undefined){
        unansweredCount++;
    }
    else if (q8 == "C. That's what she said"){
        correctCount++;
    }
    else {
        incorrectCount++;
    }

    // displays the totals to the html 
    $("#correctanswers").html(correctCount);
    $("#incorrectanswers").html(incorrectCount);
    $("#unanswered").html(unansweredCount);

    $("#countercontainer").show();
    //* function to get theme music to play once the time is up
    function timeUp() {

    audio.play();
    }
}
});

