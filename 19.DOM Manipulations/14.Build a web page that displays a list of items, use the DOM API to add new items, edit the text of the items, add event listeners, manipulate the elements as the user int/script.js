const ulEl = document.getElementById('items');

function addNewListItem() {

    const newItem = document.createElement('li');
    newItem.textContent = document.querySelector('input').value;
    document.querySelector('input').value = "";
    ulEl.appendChild(newItem);

}

ulEl.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        const text = prompt("Please edit the text:");
        if (text.length > 0) {
            e.target.textContent = text;
        }   
    }
});
