function sumDigits(n) {

    let sumEven = 0;
    let sumOdd = 0;

    while (n) {

        let digit = n % 10;

        if (digit % 2 === 0) {
            sumEven += digit;
        } else {
            sumOdd += digit;
        }

        n = (n - digit) / 10;
    }

    return [sumOdd, sumEven];

}

function printEvenOddDigits(n) {
    let sum = sumDigits(n);
    console.log(`Odd sum = ${sum[0]}, Even sum = ${sum[1]}`);
}

printEvenOddDigits(1000435);
printEvenOddDigits(3495892137259234);