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