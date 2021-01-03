// Javascript
var questionIndex = 0;
var answers = document.querySelectorAll('.answer');
var welcomeSec = document.querySelector('#welcomeSection');
var quizSec = document.querySelector('#quizSection');
var startBtn = document.querySelector('#startButton');


startBtn.addEventListener("click", startQuiz);
var questions = [
  {
    question: 'What is 2 + 2?',
    answers: ['5', '6', '13', '4'],
    correctAnswer: 3
  },
  {
    question: 'What color is the sky?',
    answers: ['blue', 'gray', 'black', 'orange'],
    correctAnswer: 0
  }
];

function startQuiz() {
welcomeSec.classList.add('hidden'); // hides the Welcome section
quizSec.classList.remove('hidden'); // display/shows the Quiz section
}

function startTimer() {
}

function showQuestion() {
  var questionEl = document.querySelector('.question');
  var ans1 = document.querySelector('#answer1');
  var questionObj = questions[questionIndex];
  questionEl.textContent = questionObj.question;
  ans1.textContent = questionObj.answers[0];
  ans1.dataset('correct') = (3 === questionObj.correctAnswer)
  ans3.addEventListner('click', function() {
  })
  questionIndex++;
}
// var timerId = setInterval(<FUNCTION TO CALL>, 1000);
// clearInterval(timerId); // Stops the process












// // questions array
// let questionsArray = [

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