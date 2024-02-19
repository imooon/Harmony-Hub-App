var quoteText = document.getElementById('quote-text');
var quoteTags = document.getElementById('quote-tags');
var quoteAuthor = document.getElementById('quote-author');
var genQuoteBtn = document.getElementById('generate-quote-button');

fetch("https://zenquotes.io/api/quotes/")
    .then




const api_url ="https://zenquotes.io/api/quotes/";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
}

getapi(api_url);