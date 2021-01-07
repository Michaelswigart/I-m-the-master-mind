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
    }
    // questons more of them
  ];
var currentQuestionIndex = 0;
var time = questions.length * 15;
var questionIndex = 0;
var answers = document.querySelectorAll('.answer');
var welcomeSec = document.querySelector('#welcomeSection');
var quizSec = document.querySelector('#quizSection');
var timerEl = document.getElementById("time");
var feedbackEl = document.getElementById("feedback");
// add stop timer
// var stopTimerEl = document.getElementById("stopTimer"); 




var startBtn = document.querySelector('#startButton');


//questions
startBtn.addEventListener("click", startQuiz);


function startQuiz() {
  welcomeSec.setAttribute("class", "hidden");
var timerId = setInterval(clockTick, 1000);
// hides the Welcome section
quizSec.setAttribute("class", "show");
timerEl.textContent = time;
// display/shows the Quiz section

}
function clockTick(){
    time --; 
    timerEl.textContent = time;
    if ( time <= 0 ) {
      quizSec.classList.add("hidden");
    }
}
// add stop function
// function stopTimer() {
//   time --;
//   stopTimerEl
//   console.log("stopTimer");
// }
// need to make loop and make a button set atrb

function showQuestion() {
  var questionEl = document.querySelector('.question');
  var ans1 = document.querySelector('#answer1');
  var currentQuestion = questions[currentQuestionIndex]
//   var questionObj = questions[questionIndex];
  questionEl.textContent = currentQuestion.question;
  questions[questionIndex].answers.forEach(function(ans, i){
    var btn = document.createElement("button");
    btn.setAttribute("value", ans);
    btn.textContent = ans;
    btn.onclick = clickon;
    ans1.append(btn);
  })
  //ans1.textContent = questionObj.answers[0];
//   ans1.dataset('correct') = (3 === questionObj.correctAnswer)
//   ans3.addEventListner('click', function() {
//   })
  questionIndex++;
}
function clickon(){
    console.log(this.value)
    if (this.value === questions[currentQuestionIndex].correctAnswer) {
        console.log("awnser")
        feedbackEl.textContent = "correct";
    } else {
        time -= 15;
        timerEl.textContent = time;
        feedbackEl.textContent = "wrong";
    }
}
showQuestion()


// clearInterval(timerId);  Stops the process












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