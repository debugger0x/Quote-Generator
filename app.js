// Buttons
const newQuoteBtn = document.getElementById('new-quote');
const author = document.getElementById('author');
const quoteText = document.getElementById('quote');
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

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
