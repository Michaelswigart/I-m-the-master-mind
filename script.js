startTime 
var startButton = document.getElementById("startTime");
startButton.addEventListener("click",start);
// not sure if line 5 and line 8 are working as intended 



// questions array
let questionsArray = [

    {
        question : "what does HTML stand for?" ,

        choiceA : "HighText Machine Language",
    
        choiceB : "HyperText and links Markup Language",

        choiceC : "HyperText Markup Language",

        correct : "HyperText Markup Language"
    
    },{

        question : "How to create an unordered list (a list with the list items in bullets) in HTML?" ,

        choiceA : "<ul>",
    
        choiceB : "<ol>" ,

        choiceC : "<li>" ,

        correct : "<ul>"

    },{

        question : " HTML tags are enclosed in-" ,

        choiceA : "! and ?",
    
        choiceB : "< and >" ,

        choiceC : "{ and }" ,

        correct : "< and >"

    },{
    //    could not use "" because of errors
        question : "How to create a hyperlink in HTML?" ,

        choiceA : "<a href = www.javatpoint.com> javaTpoint.com </a>",
    
        choiceB : "<a url = www.javatpoint.com javaTpoint.com /a>" ,

        choiceC : "<a link = www.javatpoint.com> javaTpoint.com </a>" ,

        correct : "<a href = www.javatpoint.com> javaTpoint.com </a>"

    }];


    function start(){
    startButton.classList.add("hide")
     //start the timer
          
    
        //startTime();  show the next question  nextQuestion();
    };
       // this is the one you wnat to work on form me 
    // function start(){
    //     var  = setInterval(alertFunc, 1000) =>{
            
    //     }, interval);
   // }

    function end(){
    //save score to local storage  //remove question off the screen  //stop the timer  //save score screen
    }
    ;function timer(){
    
    }
    // function startTimer(){

    // }
    
    // function nextQuestion(){
    //    queston.classList.add("questionsArray")
    //    console.log("questions")
    // }
    ;function saveHighScore(){

    };
   
    
        
       
        
      
     
     
     