function longestSequenceOfIdenticalElements(arr) {
    
    let counter = 1;
    let maxCounter = 1;
    let numToPrint;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            counter++;
            if (counter >= maxCounter) {
                maxCounter = counter;
                numToPrint = arr[i] + " ";
            }
        } else {
            counter = 1;
        }
    }

    if (maxCounter > 1) {
        console.log(numToPrint.repeat(maxCounter));
    } else {
        console.log(arr[arr.length - 1]);
    }
    
}

longestSequenceOfIdenticalElements([2, 2, 2, 3, 4, 4, 2, 2, 2, 1]);
longestSequenceOfIdenticalElements([1, 1, 1, 2, 3, 1, 3, 3, 1, 1]);
longestSequenceOfIdenticalElements([1, 1, 2, 3, 4, 5, 6, 2, 2]);
longestSequenceOfIdenticalElements([4, 4, 4, 4]);
longestSequenceOfIdenticalElements([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
longestSequenceOfIdenticalElements([6]);