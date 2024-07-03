function smallestTwoNums(numbers) {

    let smallestNums = [];
    let counter = 0;

    while (counter < 2) {

        let smallestNum = numbers[0];

        for (let i = 1; i < numbers.length; i++) {

            if (numbers[i] < smallestNum) {
                smallestNum = numbers[i];
            }
        };

        numbers.splice(numbers.indexOf(smallestNum), 1);
        smallestNums.push(smallestNum);
        counter++;

    };
    
    console.log(...smallestNums);
}

smallestTwoNums([30, 15, 50, 5]);
smallestTwoNums([3, 0, 10, 4, 7, 3]);