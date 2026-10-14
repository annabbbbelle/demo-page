// 1. Change Text Button
const changeTextBtn = document.getElementById('changeTextBtn');
const headingText = document.getElementById('headingText');
const headingStatusText = document.getElementById('headingStatusText');

changeTextBtn.addEventListener('click', () => {
  headingText.textContent = "Thanks for Visiting!";
  headingStatusText.textContent = "🎉 You successfully changed the text!";
});

// Get references to HTML elements
const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const outputMessage = document.getElementById("outputMessage");

// Event listener for button click
submitBtn.addEventListener("click", function() {
    // Read input value, convert to lowercase, and trim extra spaces
    const text = userInput.value.trim().toLowerCase();

    // IF / ELSE IF / ELSE Logic
    if (text === "") {
        outputMessage.textContent = "Please enter something in the box first!";
    } 
    else if (text === "happy" || text === "excited") {
        outputMessage.textContent = "Awesome! Keep that high energy going! 🎉";
    } 
    else if (text === "tired" || text === "sleepy") {
        outputMessage.textContent = "Get some rest or grab a cup of water! 😴";
    } 
    else if (text === "sad") {
        outputMessage.textContent = "Sorry you're feeling down. Hope your day improves! ❤️";
    } 
    else {
        // Fallback message for any other input
        outputMessage.textContent = `You typed: "${userInput.value}". Thanks for sharing! ✨`;
    }
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
