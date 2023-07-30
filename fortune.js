document.getElementById("convertButton").addEventListener("click", function() {
    const englishText = document.getElementById("englishText").value;
    const shakespeareanText = convertToShakespearean(englishText);
    document.getElementById("shakespeareanText").innerText = shakespeareanText;
});

function convertToShakespearean(text) {
    // Replace 'thou' with 'th' and 'you' with 'thou'
    text = text.replace(/\bthou\b/gi, 'th');
    text = text.replace(/\byou\b/gi, 'thou');

    // Add 'hath' randomly before verbs
    text = text.replace(/\b(shall|will|can|could|may|might|should|would)\b/gi, 'hath $1');

    return text;
}

// Add this after the "convertToShakespearean" function

const fortuneResponses = [
    "Hark! The bard doth sayeth, 'tis certain!",
    "Marry, 'tis most likely!",
    "Out, out, brief candle! 'Tis doubtful...",
    "Aye, the heavens smile upon thee, 'tis true!",
    "Hasten not, forsooth, 'tis unclear...",
    "By the pricking of my thumbs, 'tis certain!",
    "As fair beauteous as the morn, aye!",
    "Alack, the answer lies hidden...",
    "Methinks the answer cometh from yonder!",
    "To be or not to be, that is the question! Aye!",
];

document.getElementById("getFortuneButton").addEventListener("click", function() {
    const question = document.getElementById("fortuneQuestion").value;
    const randomResponse = getRandomResponse(fortuneResponses);
    displayFortuneResult(question, randomResponse);
});

function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

function displayFortuneResult(question, response) {
    const fortuneResult = document.getElementById("fortuneResult");
    fortuneResult.innerHTML = `<strong>Question:</strong> ${question}<br><strong>Fortune:</strong> ${response}`;
}

