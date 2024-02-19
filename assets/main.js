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

// Function to display pictures and play sound associated with the tracks
function displayData(tracks) {
    var pictureContainer = document.getElementById("pictureContainer");
    pictureContainer.innerHTML = ""; // Clear previous pictures

    tracks.forEach(track => {
        var trackName = track.name;
        var artistName = track.artists[0].name;
        var trackPhoto = track.album.images[0].url; // Use the first image as photo
        var trackPreviewUrl = track.preview_url; // Get the preview URL for the track

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



