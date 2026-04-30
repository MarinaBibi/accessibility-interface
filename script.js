function readAloud() {
  let text = "Personal details entered.";
  let speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
let fontSize = 18;

function applyFontSize() {
  document.body.style.fontSize = fontSize + "px";
}

function increaseText() {
  fontSize += 2;
  applyFontSize();
}

function decreaseText() {
  fontSize -= 2;
  applyFontSize();
}

function resetText() {
  fontSize = 18;
  applyFontSize();
}
