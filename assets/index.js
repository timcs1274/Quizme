var startBtn = document.getElementById("startQuiz")
var questionContainerEl = document.getElementById("questionContainer")
var questionEl = document.getElementById("questions")
var answerArrEl = document.getElementById("answerArr")

var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")

var timer = 30;
var penalty = 3;
var scoreList = document.getElementById('highscore')

startBtn.addEventListener("click", startQuiz) 
btn1.addEventListener("click", checkAnswer)
btn1.addEventListener("click", setNextQuestion)
btn2.addEventListener("click", checkAnswer)
btn2.addEventListener("click", setNextQuestion)
btn3.addEventListener("click", checkAnswer)
btn3.addEventListener("click", setNextQuestion)



//Array of questions
var quizQuestions = [
    {
        question: 'What does HTML stand for?',
        options: ['Hyper Time Mark Lapse', 'Hypertext Markup Language', 'Hilltop Merging Logistics'],
        answer: 'Hypertext Markup Language',
    },
    {
        question: 'What does Javascript do?',
        options: ['Implement features on web pages', 'Look cool', 'Create client-side servers'],
        answer: 'Implement features on web pages',
    },
    {
        question: 'What does CSS generally work with?',
        options: ['An HTML file', 'Mysql', 'Node.js'],
        answer: 'An HTML file',
    },
]

// Start quiz!
function startQuiz() {
    console.log("Quiz has started");
    startBtn.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    document.querySelector('.intro').classList.add("hide");
    scoreList.classList.remove("hide");

    countdown();
    setNextQ();
} 



// Set the next questions
function setNextQ() {
    if(i===quizQuestions.length){
        clearInterval(window.timeInterval)
        var userInit = prompt("Enter your initials to save your score!")
        localStorage.setItem(userInit, timer)
        questionContainerEl.classList.add("hide");
        window.timeMessage.classList.add("hide");
        
        // Loop through local storage
        for (index=0;index<localStorage.length;index++){
        var li = document.createElement('li')
        scoreList.appendChild(li)
        li.textContent = localStorage.key(index) + ': ' + localStorage.getItem(localStorage.key(index))
        }
        return
    }
    questionEl.textContent = quizQuestions[i].question
    btn1.innerText = quizQuestions[i].options[0]
    btn2.innerText = quizQuestions[i].options[1]
    btn3.innerText = quizQuestions[i].options[2]
    i++
    console.log(i)
}

// Timer function
var timer = document.getElementById("countdown");

function countdown() {
    window.timeMessage = document.getElementById("countdown")

     window.timeInterval = setInterval(function() {
        if (timer > 1) {
            window.timeMessage.textContent = "Time: " + timer;
            timer--;
        } else if (timer === 0) {
            clearInterval(window.timeInterval);
            window.timeMessage.textContent = "Time's up!";
        }
    }, 1000);
}