function insertRow() {
    
    const tableEl = document.getElementById('sampleTable');

    const rowNumber = tableEl.querySelectorAll('tr').length;
    
    const row = tableEl.insertRow(-1);

    const firstCell = row.insertCell(0);
    const secondCell = row.insertCell(-1);

    firstCell.innerHTML = `Row${rowNumber + 1} cell1`;
    secondCell.innerHTML = `Row${rowNumber + 1} cell2`;

}
