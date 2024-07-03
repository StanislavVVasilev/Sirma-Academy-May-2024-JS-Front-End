function arrayManipulations(arrOfStrings) {

    let arr = arrOfStrings.shift().split(" ");

    for (const el of arrOfStrings) {

        let command = el.split(" ")[0];
        let number = el.split(" ")[1];

        if (command === "Insert") {
            let index = el.split(" ")[2];
            arr.splice(index, 0, number);
        } else if (command === "Add") {
            arr.push(number);
        } else if (command === "Remove") {
            arr = arr.filter(el => el !== number);
        } else if (command === "RemoveAt") {
            arr.splice(number, 1);
        }
    }

    console.log(...arr);
}

arrayManipulations(
    [
        "4 19 2 53 6 43",
        "Add 3",
        "Remove 2",
        "RemoveAt 1",
        "Insert 8 3"
    ]
);