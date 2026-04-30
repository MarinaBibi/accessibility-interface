function readAloud() {
  let name = document.getElementById("name").value;
  let dob = document.getElementById("dob").value;
  let kin = document.getElementById("kin").value;
  let address = document.getElementById("address").value;

  let text = `
    Personal Details.
    Name is ${name || "not entered"}.
    Date of birth is ${dob || "not entered"}.
    Next of kin is ${kin || "not entered"}.
    Address is ${address || "not entered"}.
  `;

  let speech = new SpeechSynthesisUtterance(text);
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
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
