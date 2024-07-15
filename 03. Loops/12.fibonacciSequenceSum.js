function fibonacci(number) {

    let fib = 0;
    let fib1 = 0;
    let fib2 = 1;
    let fibSum = 0;

    for (let i = 1; i <= number; i++) {
        fib1 = fib2;
        fib2 = fib;
        fib = fib1 + fib2;
        fibSum += fib;
    }
    console.log(fibSum);
}

fibonacci(3);
fibonacci(5);
fibonacci(1);
fibonacci(0);
fibonacci(10);