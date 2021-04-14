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
    showQuestions(0);
});

function showQuestions(index) {
    var que_text = document.querySelector(".que_text");
    var que_tag = '<strong>'+ questions[index].numb + ". " + questions[index].question +'</strong>';
    que_text.innerHTML = que_tag; 

    // //creating a new span and div tag for question and option and passing the value using array index
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
        }
    }
    else {
        finishBox.style.display = "block";
        finishBox.appendChild(document.createTextNode("You're Final Score is: " + myScore + "."));
        questionBox.remove();
        currentScore.remove();
    }

    
    showQuestions(currentQuestion++);
}
