// 1. Change Text Button
const changeTextBtn = document.getElementById('changeTextBtn');
const headingText = document.getElementById('headingText');
const headingStatusText = document.getElementById('headingStatusText');

changeTextBtn.addEventListener('click', () => {
  headingText.textContent = "Thanks for Visiting!";
  headingStatusText.textContent = "🎉 You successfully changed the text!";
});

// 2. Display User Input Text
const submitInputBtn = document.getElementById('submitInputBtn');
const userInput = document.getElementById('userInput');
const userInputOutput = document.getElementById('userInputOutput');

submitInputBtn.addEventListener('click', () => {
  const textValue = userInput.value;

  if (textValue.trim() === '') {
    userInputOutput.textContent = 'Please type something in the box first!';
  } else {
    userInputOutput.textContent = `You entered: "${textValue}"`;
    userInput.value = ''; // Clears input box after display
  }
});

// 3. Like Counter Button
let count = 0;
const likeBtn = document.getElementById('likeBtn');
const countDisplay = document.getElementById('likeCount');

likeBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});
