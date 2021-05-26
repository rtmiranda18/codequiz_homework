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

var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var isPaused = true;

// Start of Step 1
function startExam() {
  step1.style.display = 'none';
  step2.style.display = 'block';
  step3.style.display = 'none';
  current_Question_n_Answers(0);
    currentScore[0].innerHTML = 0;
    isPaused = false;
}
// End of Step 1

// Start of Step 2
var countdownTimer = document.getElementById("countdownTimer");
var currentScore = document.getElementsByClassName("currentScore");
var displayQuestion = document.getElementById("displayQuestion");
var displayAnswers = document.getElementById("displayAnswers");
var answerStatus = document.getElementById("answerStatus");
var currentQuestion = 1;
var timeLeft = 75;
var myScore = 0;

// TIMER
var currentTime = window.setInterval(function() {
  if(!isPaused) {
    timeLeft--;
      if(timeLeft <= 0){
          console.log('Finished');
          countdownTimer.innerHTML = 0;
          step1.style.display = "none";
          step2.style.display = "none";
          step3.style.display = "block";
          isPaused = true;
      } else {
          countdownTimer.innerHTML = timeLeft;
      }
  }
}, 1000);

function current_Question_n_Answers(index) {
  if(questions.length >= (index + 1)) {
    var question = '<strong>'+ questions[index].numb + ".</strong> " + questions[index].question;
    var answers = '<li class="answer">'+ questions[index].options[0] +'</li>'
                    + '<li class="answer">'+ questions[index].options[1] +'</li>'
                    + '<li class="answer">'+ questions[index].options[2] +'</li>'
                    + '<li class="answer">'+ questions[index].options[3] +'</li>';
    
    // 
    displayQuestion.innerHTML = question;
    displayAnswers.innerHTML = "<ul>" + answers + "</ul>";

    //
    var answer = displayAnswers.querySelectorAll(".answer");

    //
    for(i=0; i < answer.length; i++) {
        answer[i].setAttribute("onclick", "changeQuestion(" + i + ", " + index + ")");
    }
  }
}

function changeQuestion(i, index) {
  if (index < (questions.length - 1)) {
    if (i == questions[index].answer) {
        answerStatus.innerHTML = "<span class='correct'>Correct!</span>";
        currentScore[0].innerHTML = myScore + 5;
        myScore += 5;
    } else {
        isPaused = true;
        timeLeft = parseInt(countdownTimer.textContent) - 10;
        countdownTimer.innerHTML = timeLeft;
        isPaused = false;
        answerStatus.innerHTML = "<span class='incorrect'>Incorrect!</span>";
    }
  } else {
    if (i == questions[index].answer) {
      myScore = myScore + 5;
    }
    currentScore[1].innerHTML = myScore;
    step3.style.display = "block";
    step2.style.display = "none";
  }
  current_Question_n_Answers(currentQuestion++);
}

function resetExam() {
  isPaused = true;
  timeLeft = 75;
  myScore = 0;
  currentQuestion = 1;
  countdownTimer.innerHTML = timeLeft;
  answerStatus.innerHTML = "";
  step1.style.display = "block";
  step2.style.display = "none";
  step3.style.display = "none";
}

// End of Step 2

// Start of Step 3

var examiners = [];
var listOfExaminers = document.getElementById("listOfExaminers");
var initialName = document.getElementById("initialName");

function submitInitialName() {
  var getInitialName = initialName.value;
  examiners.push({
    name: getInitialName, 
    score: myScore
  })
  console.log(examiners);
  listOfExaminers.innerHTML = 
        "<ul>" 
            + examiners.sort(function(a, b){return b.score - a.score}).map((examiner, index) => "<li class='examiner_"+index+"'>" + (index == 0 ? "<strong>Top Scorer</strong><br />" : "")+ examiner.name + ": "+ examiner.score +"</li>").join("") +
        "</ul>";
  initialName.value = '';
  resetExam();
  return false;

}

// End of Step 3