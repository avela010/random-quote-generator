// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Array of Objects to hold quotes.
var quotes = [{
        quote: 'Logic will get you from A to Z; imagination will take you everywhere.',
        source: 'Albert Einstein',
        citation: null,
        year: null
    },
    {
        quote: 'If you can dream it, you can do it.',
        source: 'Walt Disney',
        citation: null,
        year: null
    },
    {
        quote: 'Simplicity is the ultimate sophistication.',
        source: 'Leonardo Da Vinci',
        citation: null,
        year: null
    },
    {
        quote: 'Don\'t pay attention to what they write about you. Just measure it in inches.',
        source: 'Andy Warhol',
        citation: null,
        year: null
    },
    {
        quote: 'Sex and religion are closer to each other than either might prefer.',
        source: 'Saint Thomas More',
        citation: null,
        year: 1535
    },
    {
        quote: 'Happiness equals reality minus expectations.',
        source: 'Tom Magliozzi',
        citation: 'famous quotes',
        year: 2014
    },
    {
        quote: 'Life is 10% what happens to me and 90% of how I react to it.',
        source: 'Charles Swindoll',
        citation: 'Forbes',
        year: 2017
    },
    {
        quote: 'Every child is an artist.  The problem is how to remain an artist once he grows up.',
        source: 'Pablo Picasso',
        citation: null,
        year: 2004
    },
    {
        quote: 'Your time is limited, so don’t waste it living someone else’s life.',
        source: 'Steve Jobs',
        citation: 'Forbes',
        year: 2017
    },
    {
        quote: 'You can never cross the ocean until you have the courage to lose sight of the shore.',
        source: 'Christopher Columbus',
        citation: null,
        year: null
    }

];

//Deep copy of quotes array object.
var objCopy = Object.assign([], quotes);

//resets the quoteObject array when all of them have been displayed.
function resetQuoteObject() {
    quotes = Object.assign([], objCopy);
}

//randomly selects a quote object from the array.
function getRandomQuote() {
    if (quotes.length < 1) {
        resetQuoteObject();
    }

    var randomNum = Math.floor(Math.random() * quotes.length);
    var objQuote = quotes[randomNum];
    quotes.splice(randomNum, 1);
    return objQuote;
}

//prints out the next random quote object.
function printQuote() {
    var quoteObject = getRandomQuote(quotes);
    var html;

    if (quoteObject.citation === null && quoteObject.year === null) {
        html = '<p class="quote">' + quoteObject.quote + '</p>' +
            '<p class="source">' + quoteObject.source + '</p>';
    } else if (quoteObject.citation === null && quoteObject.year !== null) {
        html = '<p class="quote">' + quoteObject.quote + '</p>' +
            '<p class="source">' + quoteObject.source + '<span class="year">' + quoteObject.year + '</span></p>'
    } else {
        html = '<p class="quote">' + quoteObject.quote + '</p>' +
            '<p class="source">' + quoteObject.source + '<span class="citation">' + quoteObject.citation + '</span></p>'
    }

    document.getElementById('quote-box').innerHTML = html;

}

//change quote every 30 seconds.
function changeQuote() {
    setInterval(printQuote, 30000);
    console.log('Changed quote!');
}

changeQuote();