// variable for timer to start at 60
var count = 60;

// variable count of right, wrong, unanswered questions; variable for theme music
var correctCount = 0;
var incorrectCount= 0;
var unansweredCount = 0;
var audio = new Audio("assets/music/theoffice.mp3");

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
//
function startCountdown(){
    setInterval(countdown, 1000);
}

// f
function timeUp(){

    // variable checks for value from radio button
    var question1 = $('input:radio[name="question1"]:checked').val();
    var question2 = $('input:radio[name="question2"]:checked').val();
    var question3 = $('input:radio[name="question3"]:checked').val();
    var question4 = $('input:radio[name="question4"]:checked').val();
    var question5 = $('input:radio[name="question5"]:checked').val();
    var question6 = $('input:radio[name="question6"]:checked').val();
    var question7 = $('input:radio[name="question7"]:checked').val();
    var question8 = $('input:radio[name="question8"]:checked').val();

    if (question1 == undefined){
        unansweredCount++;
        }
    else if (question1 == "D. Stapler"){
        correctCount++;
    }
    else {
        incorrectCount++;
    }

    if (question2 == undefined){
        unansweredCount++;
    }
    else if (question2 == "A. Forever by Chris Brown"){
        correctCount++;
    }
    else {
        incorrectCount++;
    }

    if (question3 == undefined){
        unansweredCount++;
    }
    else if (question3 == "B. Bathroom"){
        correctCount++;
    }
    else {
        incorrectCount++;
    }
    
    if (question4 == undefined){
        unansweredCount++;
    }
    else if (question4 == "A. Meredith"){
        correctCount++;
    }
    else {
        incorrectCount++;
    }

    if (question5 == undefined){
        unansweredCount++;
    }
    else if (question5 == "C. He's trying to find the end of a wire Jim attached to his computer."){
        correctCount++;
    }
    else {
        incorrectCount++;
    }
    
    if (question6 == undefined){
        unansweredCount++;
    }
    else if (question6 == "B. George Forman Grill"){
        correctCount++;
    }
    else {
        incorrectCount++;
    }

    if (question7 == undefined){
        unansweredCount++;
    }
    else if (question7 == "C. Suck On This"){
        correctCount++;
    }
    else {
        incorrectCount++;
    }

    if (question8 == undefined){
        unansweredCount++;
    }
    else if (question8 == "C. That's what she said"){
        correctCount++;
    }
    else {
        incorrectCount++;
    }
}

$("#correctanswers").html(correctCount);
$("#incorrectanswers").html(incorrectCount);
$("#unanswered").html(unansweredCount);

$("#countercontainer").show();

//* function to get theme music to play once the time is up
function timeUp() {

    //  The following line will play the audio file we linked to above
    audio.play();
}
});