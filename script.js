// Array of quiz questions
const questions = [
    { 
        question: "La généalogie de Jésus ?", 
        correctAnswer: "Matthieu 1, Luc 3",
        type: "text"
    }, 
    { 
        question: "Les Rois Mages ?", 
        correctAnswer: "Matthieu 2", 
        type: "text"
    },
    { 
        question: "La Naissance de Jésus ?", 
        correctAnswer: "Matthieu 1, Luc 2, JEan 1", 
        type: "text"
    },
    { 
        question: "La Fuite en Egypte ?", 
        correctAnswer: "Matthieu 2", 
        type: "text"
    },
    { 
        question: "L'Annonce de Jean Baptiste ?", 
        correctAnswer: "Matthieu 3, Marc 1, Luc 3, Jean 1", 
        type: "text"
    },
    { 
        question: "Le Baptême de Jésus ?", 
        correctAnswer: "Matthieu 3, Marc 1, Luc 3, Jean 1",
        type: "text"
    },
    { 
        question: "La Tentation de Jésus ?", 
        correctAnswer: "Matthieu 4, Marc 1, Luc 4",
        type: "text"
    },
    { 
        question: "L'Appel des Premiers Disciples ?", 
        correctAnswer: "Matthieu 4, Marc 1, Luc 5, Jean 1", 
        type: "text"
    },
    { 
        question: "Le Sermon sur la Montagne ?", 
        correctAnswer: "Matthieu 5-7, Luc 6", 
        type: "text"
    },
];

let currentQuestionIndex = 0;
let selectedQuestions = []; // Array to store the selected subset of questions

// Function to shuffle and return a subset of the array
function getRandomQuestions(array, num) {
    const shuffled = array.slice(); // Create a copy of the original array
    shuffleArray(shuffled); // Shuffle the copy
    return shuffled.slice(0, num); // Return the first 'num' elements
}

// Shuffle helper function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Start the quiz
function startQuiz() {
    const questionCount = parseInt(document.getElementById("question-count").value);

    // Shuffle and select the desired number of questions
    selectedQuestions = getRandomQuestions(questions, questionCount);
    currentQuestionIndex = 0; // Reset question index for new quiz

    // Hide setup options and show quiz container
    document.getElementById("quiz-setup").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("intro").style.display = "none";

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
    textAnswerEl.placeholder = "Ta réponse";

    // Use selectedQuestions instead of questions
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;
}

// Submit Answer function to validate answers
function submitAnswer() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    
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
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion();
    } else {
        alert("C'est finito ! Bien joué :)");
        currentQuestionIndex = 0;

        // Show the intro section and reset the quiz setup elements
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("intro").style.display = "block";
        document.getElementById("quiz-setup").style.display = "block";
        document.getElementById("start-btn").style.display = "inline-block";
    }
}
