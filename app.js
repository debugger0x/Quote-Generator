// Buttons
const newQuoteBtn = document.getElementById('new-quote');
const author = document.getElementById('author');
const quoteText = document.getElementById('quote');
const twitterBtn = document.getElementById('x');
// Functions
function newQuote() {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  // Replacing its text content
  author.textContent = quote.author;
  if (!quote.text) {
    quoteText.textContent = quote.quote;
  } else {
    quoteText.textContent = quote.text;
  }

  if (quote.author == null) {
    author.textContent = 'Unknown';
  }
}

function tweetQuote() {
  const quoteTweet = quoteText.innerText;
  const authorTweet = author.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteTweet} - ${authorTweet}`;
  window.open(twitterUrl, '_blank');
}

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
