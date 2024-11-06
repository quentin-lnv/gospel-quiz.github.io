// Array of quiz questions with both types of questions
const questions = [
    { 
        question: "Où se trouve l'histoire du centurion romain ? (2 Réponses sont correctes)", 
        answers: ["Matthieu 8", "Marc 5", "Luc 11", "Luc 7"], 
        correct: [0, 3],
        type: "multiple-choice"
    }, 
    { 
        question: "Quelle histoire peut être trouvée dans les quatre évangiles ? (Une réponse correcte)", 
        answers: ["Le Baptême de Jésus", "La Naissance de Jésus", "Les Rois Mages", "La Tentation de Jésus"], 
        correct: 0,
        type: "multiple-choice"
    },
    { 
        question: "Où se trouve l'histoire des rois mages ?", 
        answers: ["Matthieu 2", "Marc 2", "Luc 2", "Luc 3"], 
        correct: 2,
        type: "multiple-choice"
    },

    { 
        question: "Où se trouve l'histoire du centurion romain ?", 
        correctAnswer: "Matthieu 8, Luc 7",
        type: "text"
    }
];

let currentQuestionIndex = 0;

// Function to start the quiz
function startQuiz() {
    document.getElementById("start-btn").style.display = "none"; // Hide the start button
    document.getElementById("quiz-container").style.display = "block"; // Show the quiz container
    document.getElementById("intro").style.display = "none"; // Show the quiz container
    loadQuestion(); // Load the first question
}

let selectedAnswers = []; // Track selected answers

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");
    const textAnswerEl = document.getElementById("text-answer");
    const submitBtn = document.getElementById("submit-btn");

    // Clear previous answers and hide text input and Submit button by default
    answersEl.innerHTML = "";
    textAnswerEl.style.display = "none";
    textAnswerEl.value = ""; 
    submitBtn.style.display = "none"; 
    selectedAnswers = []; // Reset selected answers

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;

    if (currentQuestion.type === "multiple-choice") {
        // Show the Submit button for multiple-choice questions now
        submitBtn.style.display = "inline-block";

        // Display multiple-choice answers with checkboxes
        currentQuestion.answers.forEach((answer, index) => {
            const answerContainer = document.createElement("div");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = index;
            checkbox.onclick = () => toggleAnswerSelection(index);

            const label = document.createElement("label");
            label.innerText = answer;

            answerContainer.appendChild(checkbox);
            answerContainer.appendChild(label);
            answersEl.appendChild(answerContainer);
        });
    } else if (currentQuestion.type === "text") {
        textAnswerEl.style.display = "block";
        submitBtn.style.display = "inline-block";
    }
}

// Toggle selected answer in selectedAnswers array
function toggleAnswerSelection(index) {
    if (selectedAnswers.includes(index)) {
        selectedAnswers = selectedAnswers.filter(i => i !== index); // Deselect if already selected
    } else {
        selectedAnswers.push(index); // Select if not already selected
    }
}
// Function to check the answer for multiple-choice questions
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.type === "multiple-choice") {
        if (selectedIndex === currentQuestion.correct) {
            alert("Correct !");
        } else {
            alert("Et non !");
        }
    }
    nextQuestion();
}

// Submit Answer function to validate answers
function submitAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (currentQuestion.type === "multiple-choice") {
        const correctAnswers = currentQuestion.correct;

        // Sort both arrays to ensure correct comparison regardless of selection order
        const isCorrect = JSON.stringify(selectedAnswers.sort()) === JSON.stringify(correctAnswers.sort());

        if (isCorrect) {
            alert("Correct!");
        } else {
            alert("Wrong!");
        }
    } else if (currentQuestion.type === "text") {
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
