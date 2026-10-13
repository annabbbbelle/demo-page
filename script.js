// Alert button logic
const alertBtn = document.getElementById('myButton');
alertBtn.addEventListener('click', () => {
  alert('Hello! Thanks for clicking the button!');
});

// Like button logic
let count = 0;
const likeBtn = document.getElementById('likeBtn');
const countDisplay = document.getElementById('likeCount');

likeBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});
