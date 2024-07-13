function getOptions() {

    const selectedEl = document.getElementById('mySelect');
    const selectedElCount = selectedEl.length;
    let textToDisplay = `Total colors: ${selectedElCount + "\n"}`

    for (let i = 0; i < selectedElCount; i++) {
        textToDisplay += selectedEl.children[i].textContent + "\n";
    }

    alert(textToDisplay);

}