// --------------------
// DEFAULT DATABASE (for analysis)
// --------------------
const defaultUsers = [
  {
    name: "John Smith",
    dob: "1985-06-15",
    kin: "Sarah Smith",
    address: "12 Green Street"
  },
  {
    name: "Emma Brown",
    dob: "1992-03-22",
    kin: "Michael Brown",
    address: "45 Oak Avenue"
  },
  {
    name: "Ali Khan",
    dob: "2001-11-09",
    kin: "Fatima Khan",
    address: "8 River Road"
  },
  {
    name: "Sophia Taylor",
    dob: "1978-01-30",
    kin: "James Taylor",
    address: "22 Hill Lane"
  },
  {
    name: "Daniel Wilson",
    dob: "1999-09-17",
    kin: "Laura Wilson",
    address: "5 Park Close"
  }
];

// Saved users (local storage)
let savedUsers = JSON.parse(localStorage.getItem("users")) || [];

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
function stopReadAloud() {
  window.speechSynthesis.cancel();
}
function validateForm() {
  let name = document.getElementById("name").value;
  let dob = document.getElementById("dob").value;
  let kin = document.getElementById("kin").value;
  let address = document.getElementById("address").value;

  let errors = [];

  if (!name) errors.push("Name is required");
  if (!dob) errors.push("Date of birth is required");
  if (!kin) errors.push("Next of kin is required");
  if (!address) errors.push("Address is required");

  let errorBox = document.getElementById("errorBox");

  if (errors.length > 0) {
    errorBox.innerHTML = errors.join("<br>");
    return false;
  } else {
    errorBox.innerHTML = "Form is valid ✔";
    return true;
  }
}

function saveUser() {

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const kin = document.getElementById("kin").value;
  const address = document.getElementById("address").value;

  if (!name || !dob || !kin || !address) {
    alert("Please fill all fields");
    return;
  }

  const newUser = { name, dob, kin, address };

  savedUsers.push(newUser);

  localStorage.setItem("users", JSON.stringify(savedUsers));

  alert("Details saved successfully ✔");
}
let database = JSON.parse(localStorage.getItem("users")) || [];
function saveUser() {

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const kin = document.getElementById("kin").value;
    const address = document.getElementById("address").value;

    if (!name || !dob || !kin || !address) {
        alert("Please fill all fields");
        return;
    }

    const user = {
        name,
        dob,
        kin,
        address
    };

    database.push(user);

    localStorage.setItem("users", JSON.stringify(database));

    alert("User saved successfully!");
  
function findUser() {

  const nameInput = document.getElementById("name").value.toLowerCase();
  const dobInput = document.getElementById("dob").value;

  // combine default + saved users
  const allUsers = [...defaultUsers, ...savedUsers];

  const foundUser = allUsers.find(user =>
    user.name.toLowerCase() === nameInput &&
    user.dob === dobInput
  );

  if (foundUser) {
    document.getElementById("kin").value = foundUser.kin;
    document.getElementById("address").value = foundUser.address;

    alert("User found ✔");
  } else {
    alert("User not found");
  }
}
