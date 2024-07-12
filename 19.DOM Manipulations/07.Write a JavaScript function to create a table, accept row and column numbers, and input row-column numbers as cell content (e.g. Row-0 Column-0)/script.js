function createTable() {

    let selectedRows = -1;
    let selectedCols = -1;

    while (selectedRows < 1 || selectedRows > 50 || !Number.isInteger(Number(selectedRows))) {
        selectedRows = prompt("Please select number of rows to add(1 - 50)");
    }

    while (selectedCols < 1 || selectedCols > 50 || !Number.isInteger(Number(selectedCols))) {
        selectedCols = prompt("Please select number of columns to add(1 - 50)");
    }
    
    const tableEl = document.getElementById('myTable');
    const tableBodyEl = document.createElement('tbody');

    tableEl.appendChild(tableBodyEl);

    for (let rows = 0; rows < selectedRows; rows++) {

        const tableRowEl = document.createElement('tr');
        tableBodyEl.appendChild(tableRowEl);

        for (let cols = 0; cols < selectedCols; cols++) {
            const tableColEl = document.createElement('td');
            tableRowEl.appendChild(tableColEl);
            tableColEl.textContent = `Row-${rows} Column-${cols}`;
        }
    }
}