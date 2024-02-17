// this is a function for when the display button ic clicked what would be displayed
function display() {
    var selectOptions= document.getElementById("selectOptions");
    var selectedOption=selectOptions.options[selectOptions.selectedIndex].value;
  //this encode the selected option for URL
    var searchQuery = encodeURIComponent(selectedOption);

// The Spotify API endpoint search
  var apiUrl= "https://api.spotify.com/v1/search?type=album&q="  + searchQuery;


  fetch(apiUrl)
   .then(function(response){
    return response.json();
   })
   .then(function(date){
    displayResults(date);
   })
   .catch(function(error){
    console.error('Error',error);
   });

}









































function soundPage(){
    window.location.href="sound.html";
}
function videoPage(){
    window.location.href="video.html";
}

function quizPage(){
    window.location.href="quiz.html";
}

function informationPage(){
    window.location.href="info.html";
}

function positivePage(){
    window.location.href="positive.html";
}