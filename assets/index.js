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