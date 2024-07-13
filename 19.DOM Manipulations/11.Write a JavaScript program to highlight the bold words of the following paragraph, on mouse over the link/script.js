
const wordsToHighlight = document.querySelectorAll('span');

function highlightWords() {

    for (let i = 0; i < wordsToHighlight.length; i++) {
        wordsToHighlight[i].style.fontStyle = 'italic';
        wordsToHighlight[i].style.fontWeight = 'bold';
        wordsToHighlight[i].style.fontSize = '24px';
    }
}

function backToNormal() {

    for (let i = 0; i < wordsToHighlight.length; i++) {
        wordsToHighlight[i].style.fontStyle = 'initial';
        wordsToHighlight[i].style.fontWeight = '400';
        wordsToHighlight[i].style.fontSize = '16px';
    }
}