function perfectNumber(num) {

    let sum = 0;
    let numbersToPrint = [];

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
            numbersToPrint.push(i);
        }
    }

    if (sum === num) {
        console.log(`Perfect number!`);
        console.log(numbersToPrint.join(" + "));
    } else {
        console.log(`It's not so perfect.`);
    }

}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);