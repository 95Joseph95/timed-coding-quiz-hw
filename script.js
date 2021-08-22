//select start button
var startButton = document.getElementById('start-button')
var questionContainer = document.getElementById('question')
var answer1 = document.getElementById('answer1')
var answer2 = document.getElementById('answer2')
var answer3 = document.getElementById('answer3')
var answer4 = document.getElementById('answer4')
var score = 0;



//make the start button create a question


const myQuestions  = [
    {
        question: "What language is used for documents to be displayed in a web browser?",
        answers: {
            a: "Python",
            b: "CSS",
            c: "HTML",
            d: "C#"
        },
        correctAnswer: "c"
      },
      {
        question: "What language is used to add style your HTML in a web browser?",
        answers: {
          a: "Javascript",
          b: "C#",
          c: "CSS"
        },
        correctAnswer: "c"
    },
      {
          question: "Using what tag can Javascript be used inside of an HTML file?",
        answers: {
        a: "<div>",
          b: "<header>",
          c: "<footer>",
          d: "<script>"
        },
        correctAnswer: "d"
      },
      {
          question: "Which language lets you use console.log() ?",
          answers: {
          a: "Angular",
          b: "jQuery",
          c: "CSS",
          d: "Javascript"
        },
        correctAnswer: "d"
      }
    ];
    

function displayQuestion() {
questionContainer.innerHTML = myQuestions[0].question
var answer1 = document.getElementById('answer1')
var answer2 = document.getElementById('answer2')
var answer3 = document.getElementById('answer3')
var answer4 = document.getElementById('answer4')
answer1.innerHTML = myQuestions[0].answers.a
answer2.innerHTML = myQuestions[0].answers.b
answer3.innerHTML = myQuestions[0].answers.c
answer4.innerHTML = myQuestions[0].answers.d

}


document.addEventListener("click", function(e) {
    console.log(e.target.textContent)
    //create an if statement to check if the event target is a btn 
    //inside if if btn compare text content of the target which is clicked btn w th correct answer of current q
})



    //first question after start click
    startButton.addEventListener("click", function() {
        //make it so i dont need to hard code the value for the myquestions array ( see line 55)
        //look into parameters for
       displayQuestion();
    })
