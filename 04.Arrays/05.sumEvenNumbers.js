function sumEvenNumbers(arrOfStrings) {
    
    let sumEven = 0;

    for (let i = 0; i < arrOfStrings.length; i++) {
        let num = Number(arrOfStrings[i]);
        const isEven = num % 2 == 0;
        sumEven += isEven ? num : 0;
    }

    console.log(sumEven);
}

sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['3','5','7','9']);
sumEvenNumbers(['2','4','6','8','10']);