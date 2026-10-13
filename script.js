// Get element references from the HTML DOM
const myButton = document.getElementById('myButton');
const dynamicText = document.getElementById('dynamicText');
const headingText = document.getElementById('headingText');

// Change text content on button click
myButton.addEventListener('click', () => {
  headingText.textContent = "Thanks for Visiting!";
  dynamicText.textContent = "🎉 You successfully changed the text using JavaScript!";

  
});

const myButton = document.getElementById('myButton');
let isDark = false;

myButton.addEventListener('click', () => {
  if (!isDark) {
    document.body.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)';
    document.body.style.color = '#ffffff';
    isDark = true;
  } else {
    document.body.style.background = 'linear-gradient(135deg, #dcebfa 0%, #A63956 100%)';
    document.body.style.color = '#0f172a';
    isDark = false;
  }
});

// Like Counter logic
let count = 0;
const likeBtn = document.getElementById('likeBtn');
const countDisplay = document.getElementById('likeCount');

likeBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});
