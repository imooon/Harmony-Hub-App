// this is a function for when the display button is clicked what would be displayed
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
    displayResult(date);
   })
   //.catch(function(error){
   // console.error('Error',error);
   //});

}
//this is the function to display the data after the response through json() also using a loop to target more albums
function displayResult(data){
    var resultsDiv= document.getElementById("results");
    resultsDiv.innerHTML=""; // this is to clear previous result, still testing not sure if i want to include this option


    var albums = data.albums.items;
    for (var i = 0;  i<albums.length; i++){
    var album =albums[i];
    var albumName = album.name;
    var artistName = album.artists[0].name;
    var albumArt = album.image[0].url;// get the URL of the first album image

    var albumElement= document.createElement("div");
    albumElement.classList.add("album");
    albumElement.innerHTML="<img src='" + albumArt + "'alt='" + albumName + "<h2>"+ "'>" + albumName + "</h2>" + "<p>Artist:" + artistName + "</p>";

    resultsDiv.appendChild(albumElement);

    }
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