// This is a random quote generator.
// Inside is a an array of objects with quotes 
// Then a random number for the index of the quotes is generated to pass a quote object.
// Finally the random quote is printed onto the screen

/***
 * `quotes` array
 * This builds a quote array with 5 inspirational quotes from the movie Mean Girls
 ***/

const quotes = [
  {
    quote: "On October 3rd, he asked me what day it was",
    source: "Cady Heron",
  },
  { quote: "I'm not a regular mom, I'm a cool mom!", source: "Mrs. George" },
  {
    quote:
      "Irregardless, ex-boyfriends are off-limits to friends. That's just, like, the rules of feminism.",
    source: "Gretchen Wieners",
  },
  {
    quote: "I wish we could all get along like we used to in middle school.",
    source: "Girl Who Doesn't Go to the School",
    year: 2004,
  },
  {
    quote: "Four for you Glen Coco! You go, Glen Coco!",
    source: "Damian",
    citation: "Mean Girls",
  },
];
//test for the quotes array of objects
// console.log(quotes);

/***
 * `getRandomQuote` function
 * This is a function that return a random number up to the length of the quotes object. 
 * This random number is then used to pull a quote from the array of objects.
 ***/

const getRandomQuote = () => {
  let randomNum = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNum];
  // console.log(randomQuote);
  // console.log(randomNum);
  return randomQuote;
};

//test for the random quote generator
//getRandomQuote();

/***
 * `printQuote` function
 * This print quote function calls the random quote from the previous function
 * This quote is then used to build the quote shown on the screen
 * Included are if statements to determine whether a quote has a citation and a year to display
 ***/

const printQuote = () => {
  let randomQuote = getRandomQuote();
  let typedQuote =
    '<p class="quote">' +
    randomQuote.quote +
    "</p>" +
    '<p class="source">' +
    randomQuote.source;
  if (randomQuote.citation) {
    typedQuote += '<span class="citation">' + randomQuote.citation + "</span>";
  }

  if (randomQuote.year) {
    typedQuote += '<span class="year">' + randomQuote.year + "</span>";
  }
  typedQuote += "</p>";

  return (document.getElementById("quote-box").innerHTML = typedQuote);
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
