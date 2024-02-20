
var quizTxt = [
    
  {quote:"It doesn't depend where you go, it depends on the impression you left when leaving❤️"},
 { quote: "This is tough but you are tougher❤️"},
 {quote:"Don't be around negative energy❤️"},
 {quote: "We cant learn to fly without crashing a few times❤️"},
{quote:"Do not go where the path may lead, go instead where there is no path and leave a trail❤️"},
{quote:"Let your faith be bigger than your fears❤️"},
];

// Selects element by class
var timeEl = document.querySelector(".timer");

// Selects element by id
var mainElement = document.getElementById("quote");

var secondsLeft = 1;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
  
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      
      // calls function set time for timer 
      
      quoteText()
    }

  }, 1000);
}

// below is a function for random quote generator 
function quoteText(){


  var randomIndex = Math.floor(Math.random() * quizTxt.length );
  var happiness =quizTxt [randomIndex];
  document.getElementById("quote").textContent=happiness.quote;
  
  
};


setTime();









//this is a click option that takes use to the main page 


function mainPage(){
    window.location.href="main.html";
}

