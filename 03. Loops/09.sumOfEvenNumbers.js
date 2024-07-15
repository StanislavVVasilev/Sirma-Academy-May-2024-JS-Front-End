function sumOfEven(num) {

    let sum = 0;

    for (let i = 2; i <= num * 2; i += 2) {
        sum += i;
    }
    console.log(sum);
}

sumOfEven(3);
sumOfEven(5);
sumOfEven(1);
sumOfEven(0);
sumOfEven(10);