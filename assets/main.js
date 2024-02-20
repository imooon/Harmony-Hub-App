// Function to obtain access token from Spotify API
async function getAccessToken() {
    var clientId = 'dcabd8fdb94641e392e612ccfdce2d0a';
    var clientSecret = '45b7191be30940b7b6cf432d58563429';
    var authUrl = 'https://accounts.spotify.com/api/token';

    try {
        var response = await fetch(authUrl, {
            method: 'POST',
            body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch access token');
        }

        var data = await response.json();
        var accessToken = data.access_token;
        console.log('Access Token:', accessToken);
        return accessToken;
    } catch (error) {
        console.error('Error fetching access token:', error);
        throw error;
    }
}

// Function to fetch sound data and display pictures based on user selection
async function fetchAndDisplayData() {
    // Get the selected sound from the dropdown menu
    var selectedSound = document.getElementById("selectOptions").value;

    // Check if a sound is selected
    if (!selectedSound) {
        console.error('No sound selected');
        return;
    }

    try {
        // Fetch sound data from Spotify API based on the selected sound
        var accessToken = await getAccessToken();
        var response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(selectedSound)}&type=track&limit=7`, {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        });
  // this throw error on the console if the url do not work
        if (!response.ok) {
            throw new Error('Failed to fetch sound data');
        }

        var data = await response.json();

        // Display pictures and play sound associated with the tracks
        displayData(data.tracks.items);
    } catch (error) {
        console.error('Error fetching or displaying sound data:', error);
    }
}

// Function to display pictures and play sound associated with the tracks
function displayData(tracks) {
    var pictureContainer = document.getElementById("pictureContainer");
    pictureContainer.innerHTML = ""; // Clear previous pictures
// this pulls up the artist name  and photos and also the preview tracks as spotify only allows 30 sec preview sounds 
    tracks.forEach(track => {
        var trackName = track.name;
        var artistName = track.artists[0].name;
        var trackPhoto = track.album.images[0].url; // Use the first image as photo
        var trackPreviewUrl = track.preview_url; // Get the preview URL for the track


        // this is a var for the picture displayed, it will display and image of the track which will include the photo, track name and artist name 
        var pictureElement = document.createElement("div");
        pictureElement.classList.add("picture");
        pictureElement.innerHTML = `
            <img src="${trackPhoto}" alt="${trackName}">
            <p>${trackName} by ${artistName}</p>
        `;

        var audioElement = new Audio(trackPreviewUrl);
        audioElement.controls = true;

        pictureElement.appendChild(audioElement);
        pictureContainer.appendChild(pictureElement);
    });
}

// Function to display data on button click
function display() {
    fetchAndDisplayData();
}

// Call the function to fetch and display data when the page loads
fetchAndDisplayData();



// below are functions on each html pages so when click it navigates to the page 
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



