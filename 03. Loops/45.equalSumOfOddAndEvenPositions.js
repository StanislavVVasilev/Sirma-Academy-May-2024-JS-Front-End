function equalSumOfOddAndEvenPositions(firstNum, secondNum) {

    let evenPositionsSum = 0;
    let oddPositionsSum = 0;
    let isMatch = false;

    for (let num = firstNum; num <= secondNum; num++ ) {
        for (let j = 0; j < 6; j++) {
            let numString = num.toString();
            if (j % 2 == 0) {
                evenPositionsSum += numString[j] - '0';
            } else {
                oddPositionsSum += numString[j] - '0';
            }
        }
        if (evenPositionsSum == oddPositionsSum) {
            isMatch = true;
            console.log(num);
        }
        evenPositionsSum = 0;
        oddPositionsSum = 0;

    }
    if (!isMatch) {
        console.log("None");
    }
    
}

equalSumOfOddAndEvenPositions(100000, 100050);
equalSumOfOddAndEvenPositions(299900, 300000);
equalSumOfOddAndEvenPositions(100115, 100120);