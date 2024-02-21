// Created array for the questions

var quizData = [
    {
        question: "How is your day going so far?",
        a: "It is going great!",
        b: "Just another day...",
        c: "Today is definitely not my day",
        d: "The day just started, I feel good!",
        // correct: "c",
    },
    {
        question: "How many glasses of water did you drink today?",
        a: "One",
        b: "Four",
        c: "I don't remember",
        d: "Not enough",
        // correct: "a",
    },
    {
        question: "How are you feeling today?",
        a: "I feel anxious for some reason",
        b: "I feel confident and happy!",
        c: "I feel just fine",
        d: "I feel good",
        // correct: "b",
    },
    {
        question: "What makes you happy?",
        a: "Sleeping",
        b: "Spending time with friends & family",
        c: "Going out for a walk",
        d: "Reading a book",
        // correct: "b",
    }
];

// Targeting the elements specifically

var quiz = document.getElementById('quiz');
var answerEl = document.querySelectorAll('.answer');
var questionEl = document.getElementById('question');

// Targeting the answers 

var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var submitBtn = document.getElementById('submit');

// Targeting the search elements
var searchContainer = document.getElementById('searchContainer');
var adviceSearchInput = document.getElementById('adviceSearch');
var searchBtn = document.getElementById('searchBtn');

// Variable to track the questions, starting from the first question

var currentQuiz = 0;

loadQuiz();

// Creating function to load questions and answers

function loadQuiz() {
    deselectAnswers();

    var currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEl.forEach(answerInput => answerInput.checked = false);
}

// Removed conditioning to choose the right answer

submitBtn.addEventListener('click', () => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        fetchRandomAdvice();
        showSearchButton();
    }
});

// Creating function to fetch random advice from API

function fetchRandomAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {

            // Receiving API response

            var advice = data.slip.advice;

            // Showing result along with random advice
            
            quiz.innerHTML = `
               <p>You've completed the quiz! Here's a random advice for you:</p>
               <blockquote>${advice}</blockquote>
               <button onclick="location.reload()">Reload</button>
            `;
        })
        .catch(error => console.error("Error fetching advice:", error));
}

// Created function to show the search button

function showSearchButton() {
    searchContainer.style.display = 'block';
}

// Added event listener to the search button

searchBtn.addEventListener('click', () => {
    var searchQuery = adviceSearchInput.value.trim();

    if (searchQuery !== "") {
        fetchAdviceBySearch(searchQuery);
    } 
});

// Function to fetch advice by search query
function fetchAdviceBySearch(query) {
    var searchUrl = `https://api.adviceslip.com/advice/search/${query}`;

    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            var advice = data.slips[0].advice;

            // Displaying the searched advice
            quiz.innerHTML = `
               <p>Here's an advice based on your search:</p>
               <blockquote>${advice}</blockquote>
               <button onclick="location.reload()">Reload</button>
            `;

            // Hide the search container
            searchContainer.style.display = 'none';
        })
        .catch(error => console.error("Error fetching advice:", error));
}

// Hiding the search container initially
searchContainer.style.display = 'none';
