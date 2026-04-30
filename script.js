function readAloud() {
  let text = "Personal details entered.";

  let speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}
