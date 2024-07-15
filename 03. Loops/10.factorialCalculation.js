function factorial(number) {

    let sumFactorial = 1;

    for (let i = 2; i <= number; i++) {
        sumFactorial *= i;
    }
    console.log(sumFactorial);
}

factorial(3);
factorial(5);
factorial(1);
factorial(0);
factorial(10);