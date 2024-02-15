var quizData = [
    
    {
        question: "Why is mental well-being important?",
        a: "Because it does not promote healthy relationships",
        b: "Because it makes us sadder",
        c: "It is not",
        d: "Because it helps reach our full potential",
        correct: "d",
    },
    {
        question: "How does regular exercise contribute to mental well-being?",
        a: "It releases endorphins, improving mood",
        b: "It has no impact on mental well-being",
        c: "It increases stress levels",
        d: "It causes fatigue",
        correct: "a",
    },
    {
        question: "What is mindfulness?",
        a: "A type of meditation",
        b: "Being fully present and engaged in the current moment",
        c: "A form of intense focus",
        d: "A state of deep sleep",
        correct: "b",
    },
    {
        question: "Why is practicing gratitude beneficial?",
        a: "It has no impact on mental health",
        b: "It increases stress levels",
        c: "It helps to shift focus from negative to positive aspects of life",
        d: "It leads to overthinking",
        correct: "c",
    },
    {
        question: "What is a common symptom of burnout?",
        a: "Increased energy and motivation",
        b: "Decreased productivity and exhaustion",
        c: "Improved mental clarity",
        d: "Enhanced job satisfaction",
        correct: "b",
    },

    { 
        question: "How can practicing mindfulness contribute to stress reduction?",
        a: "By ignoring stressful situations",
        b: "By multitasking to stay busy",
        c: "By avoiding all challenges",
        d: "By cultivating awareness and acceptance of the present moment",
        correct: "d",
    }
];

var quiz = document.getElementById('quiz');
var answerEl = document.querySelectorAll('.answer');
var questionEl = document.getElementById('question');

var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var submitBtn = document.getElementById('submit');

var currentQuiz = 0;
var score = 0;

loadQuiz();

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

function getSelected() {
    var answer;
    answerEl.forEach(answerInput => {
        if (answerInput.checked) {
            answer = answerInput.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    var answer = getSelected();
    if (answer) {
       if (answer === quizData[currentQuiz].correct) {
           score++;
       }
       currentQuiz++;
       if (currentQuiz < quizData.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `;
       }
    }
});
