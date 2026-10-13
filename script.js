// Get element references from the HTML DOM
const myButton = document.getElementById('myButton');
const dynamicText = document.getElementById('dynamicText');
const headingText = document.getElementById('headingText');

// Change text content on button click
myButton.addEventListener('click', () => {
  headingText.textContent = "Thanks for Visiting!";
  dynamicText.textContent = "🎉 You successfully changed the text using JavaScript!";
});

// Like Counter logic
let count = 0;
const likeBtn = document.getElementById('likeBtn');
const countDisplay = document.getElementById('likeCount');

likeBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});
