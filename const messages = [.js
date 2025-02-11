const messages = [
    "are you sure abhilasha?",
    "Think again please??",
    "don't be in hurry sweetheart?",
    "please be confirmed",
    "abhilasha, click yes please",
    "click yes, i will give chocolates ,still a no?",
    "ok i will give party, still a no?",
    "please be sure abhilasha",
    "ok 2 parties, still a no?",
    "but I love you abhilasha, click yes pls (:"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
