// this is a hardcoded quotes that comes up in 1 seconds when the page is loaded, this is randomized
var quizTxt = [
    
  {quote:"It doesn't depend where you go, it depends on the impression you left when leaving❤️"},
 { quote: "This is tough but you are tougher❤️"},
 {quote:"Don't be around negative energy❤️"},
 {quote: "We cant learn to fly without crashing a few times❤️"},
{quote:"Do not go where the path may lead, go instead where there is no path and leave a trail❤️"},
{quote:"Let your faith be bigger than your fears❤️"},
{quote:"In life there is always a choice, it's easier to think you don't❤️"},
{quote:"Why do we fall ? So we can learn to pick ourselves up❤️"},
{quote:"We fall because we are scared of failing❤️"},
{quote:"Life isn't about final moments, it's about the moment that led up to it❤️"},
{quote:"Abraham lincoln said: The best way to predict a future is to create it❤️"},
{quote:"NO is a complete sentence❤️"},
{quote:"Every set back is a set up for a come back❤️"},
{quote:"Success is not final, failure is not fatal: It is the courage to continue that counts❤️"},
{quote:"Climb mountains not so the world can see you, but so you can see the world❤️"},
];

// Selects element by class
var timeEl = document.querySelector(".timer");

// Selects element by id
var mainElement = document.getElementById("quote");

// the seconds to wait until quote is display is declared here 
var secondsLeft = 1;

// this is a function to set the timer 
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

