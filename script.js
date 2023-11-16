const quotes = [
    "Aliyan Ahmad, mastering the MEAN stack one line of code at a time!",
    "MEAN stack wizard in the making: Aliyan Ahmad.",
    "Coding dreams come true with Aliyan Ahmad in the MEAN stack universe.",
    "Aliyan Ahmad's journey through the MEAN stack is a testament to dedication and expertise.",
    "MEAN stack brilliance personified by Aliyan Ahmad."
];

function changeSubHeadline() {
    const subHeadline = document.querySelector(".sub-headline");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    subHeadline.textContent = quotes[randomIndex];
}

// Get the "Get Quote Now" button and add an onclick event
const getQuoteButton = document.querySelector(".btn-text-3");
getQuoteButton.onclick = changeSubHeadline;