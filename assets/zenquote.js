var quoteText = document.getElementById('quote-text');
var quoteTags = document.getElementById('quote-tags');
var quoteAuthor = document.getElementById('quote-author');
var genQuoteBtn = document.getElementById('generate-quote-button');

function randomQuote();
fetch("https://zenquotes.io/api/quotes/")
    .then(response)=> response.json())
    .then(data => (
        quoteText.textContent = data.content;
        quoteTags.textContent = data.tags;
        quoteAuthor.textContent = `--${data.author};
    });
}

randomQuote();
genQuoteBtn.addEventListener('click', () => {
    randomQuote():
}),





// const api_url ="https://zenquotes.io/api/quotes/";

// async function getapi(url)
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);