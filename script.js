let apiQuotes = [];

// Show new Quotes
function newQuote() {
  const random = Math.trunc(Math.random() * 16);
  const quote = apiQuotes[random];

  console.log(quote);
  console.log(random);
}

// Fetching quotes from API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch error here
  }
}

// On load

getQuotes();
