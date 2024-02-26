var generatedQuote = '';

var scienceQuote = [
    ["Science You only live once, but if you do it right, once is enough.","Mae West"],
    ["I am so clever that sometimes I don't understand a single word of what I am saying.","Oscar Wilde"],
    ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Albert Einstein"],
	["The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.","Albert Einstein"],
	["It is our choices, Harry, that show what we truly are, far more than our abilities.","J.K. Rowling, Harry Potter and the Chamber of Secrets"],
	["All men who have turned out worth anything have had the chief hand in their own education.","Walter Scott"],
	["Trust yourself. You know more than you think you do.","Benjamin Spock"],
	["No one can make you feel inferior without your consent.","Eleanor Roosevelt, This is My Story"],
	["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","Ralph Waldo Emerson"],
	["Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.","H. Jackson Brown Jr., P.S. I Love You"]
	];
var techQuotes = [
    ["Technology is best when it brings people together."],
    ["Digital design is like painting, except the paint never dries."],
    ["Any sufficiently advanced technology is indistinguishable from magic."],
	["If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it."],
	["Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road."],
	["It's not a faith in technology. It's faith in people."],
	["Innovation is the outcome of a habit, not a random act."],
	["The technology you use impresses no one. The experience you create with it is everything."],
	["The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life."],
	["The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past."]
	];

var currentComputerIndex = 0;
var currentScienceIndex = 0;

function generateQuote() {
  if (document.getElementById("s").checked) {
    generatedQuote = scienceQuote[currentScienceIndex];
    currentScienceIndex = (currentScienceIndex + 1) % scienceQuote.length;
    document.getElementById('gQuote').innerHTML = generatedQuote;
  } else if (document.getElementById("c").checked) {
    generatedQuote = techQuotes[currentComputerIndex];
    currentComputerIndex = (currentComputerIndex + 1) % techQuotes.length;
    document.getElementById('gQuote').innerHTML = generatedQuote;
  } else {
    // Randomly choose between techQuotes and scienceQuote
    var randomQuoteArray = Math.random() < 0.5 ? techQuotes : scienceQuote;
    
    // Select a random quote from the chosen array
    generatedQuote = randomQuoteArray[Math.floor(Math.random() * randomQuoteArray.length)];
    
    document.getElementById('gQuote').innerHTML = generatedQuote;
  }
}

function next() {
  if (document.getElementById("s").checked) {
    if (currentScienceIndex < scienceQuote.length - 1) {
      currentScienceIndex++;
      generatedQuote = scienceQuote[currentScienceIndex];
      document.getElementById('gQuote').innerHTML = generatedQuote;
    }
  } else if (document.getElementById("c").checked) {
    if (currentComputerIndex < techQuotes.length - 1) {
      currentComputerIndex++;
      generatedQuote = techQuotes[currentComputerIndex];
      document.getElementById('gQuote').innerHTML = generatedQuote;
    }
  } else if (document.getElementById("r").checked) {
    // Randomly choose between techQuotes and scienceQuote
    var randomQuoteArray = Math.random() < 0.5 ? techQuotes : scienceQuote;

    // Select a random quote from the chosen array
    generatedQuote = randomQuoteArray[Math.floor(Math.random() * randomQuoteArray.length)];
    
    document.getElementById('gQuote').innerHTML = generatedQuote;
  }
}




function prev() {
  if (document.getElementById("s").checked) {
    if (currentScienceIndex > 0) {
      currentScienceIndex--;
      generatedQuote = scienceQuote[currentScienceIndex];
      document.getElementById('gQuote').innerHTML = generatedQuote;
    }
  } else if (document.getElementById("c").checked) {
    if (currentComputerIndex > 0) {
      currentComputerIndex--;
      generatedQuote = techQuotes[currentComputerIndex];
      document.getElementById('gQuote').innerHTML = generatedQuote;
    }
  } else if (document.getElementById("r").checked) {
    var randomQuoteArray = Math.random() < 0.5 ? techQuotes : scienceQuote;

    generatedQuote = randomQuoteArray[Math.floor(Math.random() * randomQuoteArray.length)];

    document.getElementById('gQuote').innerHTML = generatedQuote;
  }
}


const toggle = document.getElementById('dark-toggle');
const body = document.querySelector('body');
const header = document.querySelector('.head')

let theme = false

function darkToggle () {
  console.log('hello')
    if(theme) {
      body.style.background = 'white'
      header.style.color = '#333'
      theme = !theme
    } else {
      body.style.background = '#333'
      header.style.color = 'white'
      theme = !theme
    }
}

const fontIncrease = document.getElementById('btn-add')
const fontDecrease = document.getElementById('btn-sub')
const gQuote = document.getElementById('gQuote')
let size = 1

function fontIncreaseFunc() {
  size = size + 1
  gQuote.style.fontSize = `${size}rem`
  console.log(size)
} 


function fontDecreaseFunc() {
  size =size-1

  gQuote.style.fontSize=`${size}rem`
}

