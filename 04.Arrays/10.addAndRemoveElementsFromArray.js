function addAndRemove(arrOfCommands) {
    
    let arrOfNums = [];
    let initNumber = 1;

    for (const command of arrOfCommands) {
        
        if (command == "add") {
            arrOfNums.push(initNumber);
        } else {
            arrOfNums.pop();
        }

        initNumber++;
    }

    console.log(arrOfNums.length != 0 ? arrOfNums.join(" ") : "Empty");

}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);