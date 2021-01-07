// Javascript elements 
var questions = [
  {
    question: 'what is 2+2',
    answers: ['5', '6', '13', '4'],
    correctAnswer: '4'
  },
  {
    question: 'What color is the sky?',
    answers: ['blue', 'gray', 'black', 'orange'],
    correctAnswer: 'blue'
  },
  {
    question: 'what does HTML stand for?',
    answers: ['HighText Machine Language ', 'HyperText and links Markup Language', 'HyperText Markup Language', 'HighText Machine Language?'],
    correctAnswer: 'HyperText Markup Language'
  },
  {
    question: 'How to create an unordered list (a list with the list items in bullets) in HTML?',
    answers: ['ul', 'ol', 'li', 'div'],
    correctAnswer: 'ul'
  },
  {
    question: 'HTML tags are enclosed in?',
    answers: ['! and ?', '< and >', '{ and }', '[and]'],
    correctAnswer: '< and >'
  }
];
var currentQuestionIndex = 0;
var time = questions.length * 15;
var questionIndex = 0;
var answers = document.querySelectorAll('.answer');
var welcomeSec = document.querySelector('#welcomeSection');
var quizSec = document.querySelector('#quizSection');
var saveScore = document.querySelector('#saveScoreSection');
var finalScore = document.querySelector('#finalScore');
var timerEl = document.getElementById("time");
var feedbackEl = document.getElementById("feedback");
var correctAnswers = 0;

var startBtn = document.querySelector('#startButton');
var timerId;

startBtn.addEventListener("click", startQuiz);


function startQuiz() {
welcomeSec.setAttribute("class", "hidden");
timerId = setInterval(clockTick, 1000);
quizSec.setAttribute("class", "show");
timerEl.textContent = time;
}

function clockTick(){
  time --; 
  timerEl.textContent = time;
  if ( time <= 0 ) {
    timerEl.textContent = 0;
    quizSec.classList.add("hidden");
  }
}

function showQuestion() {
var questionEl = document.querySelector('.question');
var ans1 = document.querySelector('#answer1');
var currentQuestion = questions[currentQuestionIndex];
questionEl.textContent = currentQuestion.question;
ans1.textContent = "";
currentQuestion.answers.forEach(function(ans, i){
  var btn = document.createElement("button");
  btn.setAttribute("value", ans);
  btn.textContent = ans;
  btn.onclick = clickon;
  ans1.append(btn);
})
}

function clickon(){
  console.log(this.value)
  if (this.value === questions[currentQuestionIndex].correctAnswer) {
    correctAnswers++;
    console.log("awnser")
    feedbackEl.textContent = "correct";
  } else {
    time -= 15;
    timerEl.textContent = time;
    feedbackEl.textContent = "wrong";
  }
currentQuestionIndex++;
if(currentQuestionIndex === questions.length) {
  quizSec.setAttribute("class", "hidden");
  saveScore.setAttribute("class", "show");
  finalScore.textContent = correctAnswers;
  clearInterval(timerId);
  timerEl.textContent = 0;
  feedbackEl.textContent = "";
} else {
  showQuestion();
}
}

showQuestion();

// // questions array
//  questions = [

//     {
//         question : "what does HTML stand for?" ,

//         choiceA : "HighText Machine Language",
  
//         choiceB : "HyperText and links Markup Language",

//         choiceC : "HyperText Markup Language",

//         correct : "HyperText Markup Language"
  
//     },{

//         question : "How to create an unordered list (a list with the list items in bullets) in HTML?" ,

//         choiceA : "<ul>",
  
//         choiceB : "<ol>" ,

//         choiceC : "<li>" ,

//         correct : "<ul>"

//     },{

//         question : " HTML tags are enclosed in-" ,

//         choiceA : "! and ?",
  
//         choiceB : "< and >" ,

//         choiceC : "{ and }" ,

//         correct : "< and >"

//     },{
//     //    could not use "" because of errors
//         question : "How to create a hyperlink in HTML?" ,

//         choiceA : "<a href = www.javatpoint.com> javaTpoint.com </a>",
  
//         choiceB : "<a url = www.javatpoint.com javaTpoint.com /a>" ,

//         choiceC : "<a link = www.javatpoint.com> javaTpoint.com </a>" ,

//         correct : "<a href = www.javatpoint.com> javaTpoint.com </a>"

//     }];