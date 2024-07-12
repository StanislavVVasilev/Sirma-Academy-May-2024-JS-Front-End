function changeContent() {

    let selectedRow;
    let selectedColumn;
    let addedNewContent = "";
    const regex = /^[A-Za-z0-9\s]+$/;

    while (selectedRow !== "0" && selectedRow !== "1" && selectedRow !== "2") {
        selectedRow = prompt("Please select a row number to change the content(0, 1, 2)");
    }

    while (selectedColumn !== "0" && selectedColumn !== "1") {
        selectedColumn = prompt("Please select a column number to change the content(0, 1)");
    }
    
    while (!addedNewContent.match(regex)) {
        addedNewContent = prompt("Please fill a new content");
    }
    

    const tableContentEl = document.querySelector(`tr:nth-of-type(${selectedRow}) > td:nth-of-type(${selectedColumn})`);
    tableContentEl.textContent = addedNewContent;
}
