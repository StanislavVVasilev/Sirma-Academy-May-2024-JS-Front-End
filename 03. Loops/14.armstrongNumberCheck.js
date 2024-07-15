function armstrongNumber(num) {

    let numAsString = num.toString();
    let numAsStringLength = numAsString.length;
    let sumOfNumPow = 0;
    
    for (let i = 0; i < numAsStringLength; i++) {
        sumOfNumPow +=  Math.pow(numAsString[i], numAsStringLength);
    }

    let isArmstrongNumber = num == sumOfNumPow;
    console.log(isArmstrongNumber);
}

armstrongNumber(153);
armstrongNumber(370);
armstrongNumber(123);
armstrongNumber(407);
armstrongNumber(1634);