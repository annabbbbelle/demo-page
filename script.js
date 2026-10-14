// =============================================================
// 1. CHANGE HEADING TEXT
// =============================================================
const changeTextBtn = document.getElementById("changeTextBtn");
const headingText = document.getElementById("headingText");
const headingStatusText = document.getElementById("headingStatusText");

if (changeTextBtn) {
  changeTextBtn.addEventListener("click", () => {
    headingText.textContent = "Thanks for Visiting! 🎉";
    headingStatusText.textContent = "You successfully changed the text!";
  });
}

// =============================================================
// 2. MOOD CHECKER (IF / ELSE & ENTER KEY SUPPORT)
// =============================================================
const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const outputMessage = document.getElementById("outputMessage");

function handleMoodSubmit() {
  const text = userInput.value.trim().toLowerCase();

  if (text === "") {
    outputMessage.textContent = "Please enter something in the box first!";
    return;
  } 
  
  if (text === "happy" || text === "excited") {
    outputMessage.textContent = "Awesome! Keep that high energy going! 🎉";
  } else if (text === "tired" || text === "sleepy") {
    outputMessage.textContent = "Get some rest or grab a cup of water! 😴";
  } else if (text === "sad") {
    outputMessage.textContent = "Sorry you're feeling down. Hope your day improves! ❤️";
  } else {
    outputMessage.textContent = `You typed: "${userInput.value}". Thanks for sharing! ✨`;
  }

  // Clear input box after submitting
  userInput.value = "";
}

if (submitBtn) {
  submitBtn.addEventListener("click", handleMoodSubmit);
}

// Allow pressing "Enter" key in input field
if (userInput) {
  userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleMoodSubmit();
    }
  });
}

// =============================================================
// 3. RANDOM BACKGROUND COLOR GENERATOR
// =============================================================
const colorBtn = document.getElementById("colorBtn");

if (colorBtn) {
  colorBtn.addEventListener("click", () => {
    // Generate soft, bright hex colors to preserve readability
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = randomColor;
  });
}

// =============================================================
// 4. RANDOM FACT GENERATOR (NO REPEATS BACK-TO-BACK)
// =============================================================
const factBtn = document.getElementById("factBtn");
const factOutput = document.getElementById("factOutput");

const facts = [
  "Honey never spoils; edible honey was found in ancient Egyptian tombs!",
  "Bananas are technically berries, but strawberries are not.",
  "Octopuses have three hearts and blue blood.",
  "Venus is the only planet in our solar system that spins clockwise.",
  "A single cloud can weigh over 1 million pounds."
];

let lastFactIndex = -1;

if (factBtn && factOutput) {
  factBtn.addEventListener("click", () => {
    let randomIndex;
    
    // Pick a new index that is different from the previous one
    do {
      randomIndex = Math.floor(Math.random() * facts.length);
    } while (randomIndex === lastFactIndex && facts.length > 1);

    lastFactIndex = randomIndex;
    factOutput.textContent = facts[randomIndex];
  });
}

// =============================================================
// 5. LIKE COUNTER
// =============================================================
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");
let count = 0;

if (likeBtn && likeCount) {
  likeBtn.addEventListener("click", () => {
    count++;
    likeCount.textContent = count;
  });
}
