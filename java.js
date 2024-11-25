// Quiz questions and answers
const quizQuestions = [
    {
        question: "What is the name of the tallest grass of earth?",
        options: ["Bamboo", "pampas", "Scutch grass", "lawngrass"],
        correctAnswer: "Bamboo"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        correctAnswer: "Jupiter"
    },
    {
        question: "hj",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        correctAnswer: "CSS"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo"],
        correctAnswer: "Albert Einstein"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

// Load the next question
function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.onclick = () => checkAnswer(option);
        const optionItem = document.createElement("li");
        optionItem.appendChild(optionButton);
        optionsElement.appendChild(optionItem);
    });

    nextButton.style.display = "none"; // Hide next button until answer is chosen
}

// Check answer
function checkAnswer(selectedAnswer) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    nextButton.style.display = "block"; // Show next button after answering
}

// Go to next question or show results
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Show final result
function showResult() {
    questionElement.textContent = "Quiz Finished!";
    optionsElement.style.display = "none"; // Hide options
    nextButton.style.display = "none"; // Hide next button

    scoreElement.textContent = score;
    resultContainer.style.display = "block";
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = "none";
    optionsElement.style.display = "block";
    loadQuestion();
}

// Event listeners
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

// Initialize quiz
loadQuestion();
