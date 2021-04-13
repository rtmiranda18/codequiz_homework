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
    question: "The condition in a n if/else statement is enclosed within _______.",
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
var nextQuestion = document.querySelector(".nextQuestion");
var answerStatus = document.querySelector(".answerStatus");
var currentQuestion = 1;


nextQuestion.style.display = 'none';
//show info box
startBtn.addEventListener("click", function() {
    //close button
    startBtn.remove("button");
    //remove info box
    infoBox.remove(".infoBox")
    //start quiz
    showQuestions(0);
});

function showQuestions(index) {
    console.log(index);
    var que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    que_text.innerHTML = que_tag; 
    nextQuestion.style.display = 'block';

    // //creating a new span and div tag for question and option and passing the value using array index
   
    // let option_tag = '<div class="option "><span>'+ questions[index].options[0] +'</span></div>'
    //                 + '<div class="option "><span>'+ questions[index].options[1] +'</span></div>'
    //                 + '<div class="option "><span>'+ questions[index].options[2] +'</span></div>'
    //                 + '<div class="option "><span>'+ questions[index].options[3] +'</span></div>';
    //adding new span tag inside que_tag
   
    //adding new div tag inside option_tag
    // optionList.innerHTML = option_tag; 
    
    // var option = optionList.querySelectorAll(".option");

    // // set onclick attribute to all available options
    // for(i=0; i < option.length; i++){
    //     option[i].setAttribute("onclick", "optionSelected("+i+", "+index+")");
    // }
}

function changeQuestion () {
    // console.log(currentQuestion++);
    // showQuestions(currentQuestion++);
    //when answer is correct, move to the next question
    if (questions[currentQuestion].answer) {
      answerStatus.innerHTML = "Correct!";
      showQuestions(currentQuestion++);
    } 
   //when answer is incorrect 
    else {
      answerStatus.innerHTML = "Incorrect!";
    }
}

