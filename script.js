// Array of quiz questions with only text-based questions
const questions = [
    { 
        question: "Où se trouve la généalogie de Jésus ?", 
        correctAnswer: "Matthieu 1, Luc 3",
        type: "text"
    }, 
    { 
        question: "Où se trouve l'histoire des rois mages ?", 
        correctAnswer: "Matthieu 2", 
        type: "text"
    },
    { 
        question: "", 
        correctAnswer: "",
        type: "text"
    },
    { 
        question: "", 
        correctAnswer: "",
        type: "text"
    }
];

let currentQuestionIndex = 0;

// Function to start the quiz
function startQuiz() {
    document.getElementById("start-btn").style.display = "none"; // Hide the start button
    document.getElementById("quiz-container").style.display = "block"; // Show the quiz container
    document.getElementById("intro").style.display = "none"; // Hide the intro
    loadQuestion(); // Load the first question
}

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const textAnswerEl = document.getElementById("text-answer");
    const submitBtn = document.getElementById("submit-btn");

    // Clear previous answer input
    textAnswerEl.style.display = "block";
    textAnswerEl.value = ""; 
    submitBtn.style.display = "inline-block";
    textAnswerEl.placeholder = "Ta réponse"; // Or a specific placeholder for each question 

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;
}

// Submit Answer function to validate answers
function submitAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (currentQuestion.type === "text") {
        const userAnswer = document.getElementById("text-answer").value.trim();
        if (userAnswer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
            alert("Correct!");
        } else {
            alert("Wrong!");
        }
    }
    nextQuestion();
}

// Function to load the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("C'est finito ! Bien joué :)");
        currentQuestionIndex = 0;
        loadQuestion(); // Restart the quiz if needed
    }
}
