function processOddNumbers(numbers) {

    let reversedDoubledNums = [];

    for (let i = 1; i < numbers.length; i += 2) {
        reversedDoubledNums.unshift(numbers[i] * 2);
    }
    
    console.log(...reversedDoubledNums);
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);