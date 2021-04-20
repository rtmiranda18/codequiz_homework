var questions = [
    {
    numb: 1,
    question: "Commonly used datatypes DO NOT include:",
    answer: 2,
    options: [
      "strings",
      "booleans",
      "alerts",
      "numbers"
    ]
  },
    {
    numb: 2,
    question: "The condition in an if/else statement is enclosed within _______.",
    answer: 2,
    options: [
      "commas",
      "curly braces",
      "parentheses",
      "square brackets"
    ]
  },
    {
    numb: 3,
    question: "Arrays in JavaScript can be used to store ______.",
    answer: 3,
    options: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ]
  },
    {
    numb: 4,
    question: "String values must be closed within ______ when being assigned to variables. ",
    answer: 2,
    options: [
      "commas",
      "curly brackets",
      "quotes",
      "parentheses"
    ]
  },
    {
    numb: 5,
    question: "A very useful tool during development and debugging for printing content to the debugger is?",
    answer: 3,
    options: [
      "JavaScript",
      "terminal/bash",
      "for loops",
      "console log"
    ]
  }];

var startBtn = document.querySelector(".startBtn");
var infoBox = document.querySelector(".infoBox");
var questionBox = document.querySelector(".questionBox");
var answerStatus = document.querySelector(".answerStatus");
var answerList = document.querySelector(".answerList");
var currentScore = document.querySelector("#currentScore");
var finishBox = document.querySelector("#finishBox");
var playerArray = [];
var currentQuestion = 1;
var myScore = 0;

//show info box
startBtn.addEventListener("click", function() {
    currentScore.innerHTML = "<strong>Current Score:</strong> " + myScore;

    //remove info box
    infoBox.remove(".infoBox");
    //start quiz
    questionBox.classList.add("questionArea");
    currentScore.classList.add("scoreBox");
    countdown(60);
    localStorage.setItem('highScore', '0');
    showQuestions(0);
});

function showQuestions(index) {
    var que_text = document.querySelector(".que_text");
    var que_tag = '<strong>'+ questions[index].numb + ". " + questions[index].question +'</strong>';
    que_text.innerHTML = que_tag; 

    // //creating a new div tag for question and option and passing the value using array index
    var option_tag = '<div class="answer">'+ questions[index].options[0] +'</div>'
                    + '<div class="answer">'+ questions[index].options[1] +'</div>'
                    + '<div class="answer">'+ questions[index].options[2] +'</div>'
                    + '<div class="answer">'+ questions[index].options[3] +'</div>';
   
    //adding new div tag inside option_tag
    answerList.innerHTML = option_tag; 
    
    var answer = answerList.querySelectorAll(".answer");

    // set onclick attribute to all available options
    for(i=0; i < answer.length; i++) {
        answer[i].setAttribute("onclick", "changeQuestion(" + i + ", " + index + ")");
    }
}

function changeQuestion (i, index) {
    if (index < 4) {
        //when answer is correct, move to the next question
        if (i == questions[index].answer) {
            answerStatus.innerHTML = "<span class='correct'>Correct!</span>";
            currentScore.innerHTML = myScore + 5;
            myScore += 5;
        } 
        //when answer is incorrect 
        else {
            answerStatus.innerHTML = "<span class='incorrect'>Incorrect!</span>";
            // var currentTimer = document.getElementById("timeLeft").textContent;
            // countdown(parseInt(currentTimer) - 10);
        }
    }
    else {
      if (i == questions[index].answer) {
        myScore = myScore + 5;
        finishBox.appendChild(document.createTextNode("You're Final Score is: " + (myScore) + "."));
      }
      else {
        finishBox.appendChild(document.createTextNode("You're Final Score is: " + (myScore) + "."));
      }
        document.getElementById("countdown").remove();
        finishBox.style.display = "block";
        questionBox.remove();
        currentScore.remove();
    } 
    showQuestions(currentQuestion++);
}

function submitInitial() {
  playerArray.push({
    "playerName": initialName,
    "score": myScore,
  }) 
  
  for (var i = 0; i < playerArray.length; i++) {
    var highestScore = 0;
    var playerName = '';
    if (playerArray[i].score > highestScore) {
      highestScore = playerArray[i].score;
      playerName = playerArray[i].playerName;
    }
    localStorage.setItem("highScore", highestScore.toString());
    localStorage.setItem("playerName", playerName);
  }


  var initialName = document.getElementById("initialName").value;
  localStorage.setItem("initial_name", "<div class='finalScore'><h1 class='name'>" + initialName + "</h1><h2 class='score'>" + myScore + "</h2></div>");
  document.getElementById("displayName").innerHTML = localStorage.getItem("initial_name");
  // document.getElementById("final-score").innerHTML = "<div> <p> High Score" + localStorage.getItem("highScore") + "</p>" + "<p>Player Name" + localStorage.getItem('playerName') + "</p></div>";  
  finishBox.remove();
  return false; 
}

//start timer
function countdown(timeLeft) {
  // console.log(timeLeft);
  var quizTimer = setInterval(function(){
    if(timeLeft <= 0){
      clearInterval(quizTimer);
      document.getElementById("countdown").remove();
      finishBox.appendChild(document.createTextNode("You're Final Score is: " + (myScore) + "."));
      finishBox.style.display = "block";
      questionBox.remove();
      currentScore.remove();
    } else {
      document.getElementById("countdown").innerHTML = "<strong>Timer:</strong> <span id='timeLeft'>" + timeLeft + "</span>";
      document.getElementById("countdown").classList.add("countdownTimer");
    }
    timeLeft -= 1;
  }, 1000);
}