//Doctype JS
// script.js

// Array of quiz questions and answers
const questions = [
    { question: "What is the capital of France?", answers: ["Paris", "Rome", "Berlin", "Madrid"], correct: 0 },
    { question: "What is 2 + 2?", answers: ["3", "4", "5", "6"], correct: 1 },
    { question: "What is the largest planet?", answers: ["Earth", "Jupiter", "Mars", "Saturn"], correct: 1 }
];

let currentQuestionIndex = 0;

// Function to load a question
function loadQuestion() {
    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");

    // Clear previous answers
    answersEl.innerHTML = "";

    // Load current question and answers
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("answer-btn");
        button.onclick = () => checkAnswer(index);
        answersEl.appendChild(button);
    });
}

// Function to check the answer and move to the next question
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
    nextQuestion();
}

// Function to load the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz completed!");
        currentQuestionIndex = 0;
        loadQuestion(); // Restart the quiz if needed
    }
}

// Load the first question initially
loadQuestion();
