// Get element references from the HTML DOM
const changeTextBtn = document.getElementById('changeTextBtn');
const submitInputBtn = document.getElementById('submitInputBtn');
const userInput = document.getElementById('userInput');
const userInputOutput = document.getElementById('userInputOutput');
const headingText = document.getElementById('headingText');
const headingStatusText = document.getElementById('headingStatusText');

// 1. Change Heading Text
if (changeTextBtn) {
  changeTextBtn.addEventListener('click', () => {
    headingText.textContent = "Thanks for Visiting!";
    if (headingStatusText) {
      headingStatusText.textContent = "🎉 You successfully changed the text!";
    }
  });
}

// 2. Read Input Box and Display Text on Page
if (submitInputBtn && userInput && userInputOutput) {
  submitInputBtn.addEventListener('click', () => {
    const enteredText = userInput.value;

    if (enteredText.trim() === '') {
      userInputOutput.textContent = 'Please enter some text first!';
    } else {
      userInputOutput.textContent = `You entered: "${enteredText}"`;
      userInput.value = ''; // Clears the input field after submit
    }
  });
}

// 3. Like Counter Logic
let count = 0;
const likeBtn = document.getElementById('likeBtn');
const countDisplay = document.getElementById('likeCount');

if (likeBtn && countDisplay) {
  likeBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
  });
}
