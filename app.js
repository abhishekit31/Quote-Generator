const div = document.createElement("div");
div.id = "quote-container";

const h1 = document.createElement("h1");
h1.innerText = "Random Quote Generator";

const para = document.createElement("p");
para.id = "quoteDisplay";
para.innerText = "Click the button to see a quote!";

const button = document.createElement("button");
button.id = "new-quote";
button.innerText = "New Quote";

document.body.appendChild(div);
div.appendChild(h1);
div.appendChild(para);
div.appendChild(button);

const quotes = [
  "You must be the change you wish to see in the world. -Mahatma Gandhi",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
  "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Get busy living or get busy dying. - Stephen King",
  "The only thing we have to fear is fear itself. -Franklin D. Roosevelt",
  "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -Martin Luther King Jr.",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
];

const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteButton = document.getElementById("new-quote");

newQuoteButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});
