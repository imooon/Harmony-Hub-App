//    document.getElementById('#button').addEventListener('click", function() {
//    var picture = "";
//    document.getElementById('#picture');
//    picture.src = './images/dogwithballimage.jpeg';
//    picture.style.display = 'block';
//    });

// var button = document.querySelector("#button");
// var container = document.querySelector("#container");

// var clicked = "picture";
// button.addEventListener("click",
// function() {
//   if (clicked === "picture")
//   container.setAttribute(src = "./images/dogwithball")
// });

// var count = 0;
// var button = document.querySelector("#button");
// var imgEl = document.querySelector("#picture");

// function showPicture() {
//   button.setAttribute("src"= images/dogwithballimage.jpeg);
// }
// // Attach event listener to increment button element
// imgEl.addEventListener("click", function() {
//   count++;
//   showPicture();
// });




// Function to save message to local storage 
// function saveData() {
//     var inputData = document.getElementById('message').value;
//     localStorage.setItem('savedData', inputData);
//     displayData();
// }

// // Function to display saved message
// function displayData() {
//     var savedData = localStorage.getItem('savedData');
//     var displayDiv = document.getElementById('savedData');
//     displayDiv.textContent = savedData;
// }

// // Calls displayData function to display the message input on Positivity Board page
// displayData();


// Variables created to access the elements by id
var comment = document.getElementById("message");
var saveButton = document.getElementById("save");

function saveLastMessage() {
// Saving the message input as an object  
  var positiveMessage = {
    comment: comment.value.trim(),
  };
// Using .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem('positiveMessage', JSON.stringify(positiveMessage))
}

function renderLastMessage() {
// Using JSON.parse() to convert text to JavaScript object and save to local storage
    var lastMessage = JSON.parse(localStorage.getItem('positiveMessage'))
    // If statment to check if message is returned and exit out of the function if not
    if (lastMessage !== null) {
        document.getElementById('saved-message').innerHTML = lastMessage.comment;
    }
}

//  Event listener added so that the message is saved with click of the 'Save' button
saveButton.addEventListener('click', function (event) {
  event.preventDefault();
  saveLastMessage();
  renderLastMessage();  
});

// The function init() launches when the page is loaded
function init() {
    // When the function init() is executed, the code inside renderLastGrade function will also execute
    renderLastMessage();
}
init();