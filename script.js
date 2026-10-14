// 1. Change Text Button
const changeTextBtn = document.getElementById('changeTextBtn');
const headingText = document.getElementById('headingText');
const headingStatusText = document.getElementById('headingStatusText');

if (changeTextBtn) {
  changeTextBtn.addEventListener('click', () => {
    headingText.textContent = "Thanks for Visiting!";
    headingStatusText.textContent = "🎉 You successfully changed the text!";
  });
}

// 2. Interactive Mood Checker (If / Else Logic)
const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const outputMessage = document.getElementById("outputMessage");

if (submitBtn) {
  submitBtn.addEventListener("click", function() {
    const text = userInput.value.trim().toLowerCase();

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
      outputMessage.textContent = `You typed: "${userInput.value}". Thanks for sharing! ✨`;
    }
  });
}

// 3. Random Background Color Generator
const colorBtn = document.getElementById('colorBtn');

if (colorBtn) {
  colorBtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.body.style.background = randomColor;
  });
}

// 4. Random Fact Generator
const factBtn = document.getElementById('factBtn');
const factOutput = document.getElementById('factOutput');

const facts = [
  "Honey never spoils; edible honey was found in ancient Egyptian tombs!",
  "Bananas are technically berries, but strawberries are not.",
  "Octopuses have three hearts and blue blood.",
  "Venus is the only planet in our solar system that spins clockwise.",
  "A single cloud can weigh over 1 million pounds."
];

if (factBtn) {
  factBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factOutput.textContent = facts[randomIndex];
  });
}

// 5. Like Counter Button
let count = 0;
const likeBtn = document.getElementById('likeBtn');
const countDisplay = document.getElementById('likeCount');

if (likeBtn) {
  likeBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
  });
}
