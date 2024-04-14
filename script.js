
function checkWord() {
const txt = "My name is  Hamza, and I am a passionate web developer enrolled in the Web and App Development course at Suffah Coaching Center. I have a strong foundation in HTML, CSS, and Bootstrap, and I am currently expanding my skills in JavaScript. I am excited to apply my knowledge to create dynamic and responsive web applications.";
var textToCheck = prompt("Enter the text to search:");

if (txt.toLowerCase().includes(textToCheck.toLowerCase())) {
alert("The word you wrote has been found.");
} else {
alert("Word not found.");
}
}
