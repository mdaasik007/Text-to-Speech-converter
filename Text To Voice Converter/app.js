let speech = new SpeechSynthesisUtterance(); // function to convert text to speech

let voices = [];

let voiceSelect = document.querySelector("select");
// change voice
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    // FIX: 'new option' changed to 'new Option'
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("click", () => {
    speech.voice = voices[voiceSelect.value]; // to change voice value 
})

// to convert text to speech
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});