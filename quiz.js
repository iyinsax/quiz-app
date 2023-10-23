const questions = [
    
    {
        questions: " which is the largest animal in the world ",
        answers:[
            {text:"sharks", correct: false},
            {text:"Blue whale", correct: true},
            {text:"Elephant", correct: false},
            {text:"Giraffe", correct: false},
        ]
    },
    {
        questions: " which is the smallest continent in the world ",
        answers:[
            {text:"Asia", correct: false},
            {text:"Australia", correct: true},
            {text:"Arctic", correct: false},
            {text:"Africa", correct: false},
        ]
    },
    {
        questions: " which is the smallest continent in the world ",
        answers:[
            {text:"Asia", correct: false},
            {text:"Australia", correct: true},
            {text:"Arctic", correct: false},
            {text:"Africa", correct: false},
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-mik");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    let 
}

function showQuestion(){
    resetstate();
     let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    currentQuestion.answers.forEach(answer => {
     const button =  document.createElement('button');
     button.innerHTML = answer.text;
     button.classList.add("mik");
     answerButton.appendChild(button);
     if(answer.correct){
        button.dataset.correct = answer.correct;
     }
     button.addEventListener("click", selectanswer);
    });
}

 function resetstate(){
    nextButton.style.display = "none";
    while(answerButton?.firstChild){answerButton.removeChild(answerButton.firstChild);
    }
 }

 function selectanswer(e){
    const selectedMik = e.target;
    const isCorrect = selectedMik.dataset.correct === "true";
    if(isCorrect){
        selectedMik.classList.add("correct");
        score++;
    }else{
        selectedMik.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
 } 

 function showScore(){
    resetstate();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
 }




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }


}


 nextButton.addEventListener("click", ()=>{
     if(currentQuestionIndex < questions.length){
        handleNextButton();
     }else{
        startQuiz();
     }
 
    });
 



startQuiz();