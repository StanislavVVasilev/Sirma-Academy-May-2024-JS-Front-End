function fact(n) {
    if (n <= 0) {
      return 1;
    }
    return fact(n-1)*n;
}


function factorialDivision(firstNum, secondNum) {

    let firstNumber = fact(firstNum);
    let secondNumber = fact(secondNum);
    let result = firstNumber / secondNumber;

    console.log(`${parseFloat(result).toFixed(2)}`);
}

factorialDivision(5, 2);
factorialDivision(6, 2);