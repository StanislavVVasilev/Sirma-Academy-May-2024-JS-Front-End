function simpleCalculator(firstNum, secondNum, operation) {

    let result;

    switch (operation) {
        case "add":
            result = firstNum + secondNum;
            break;
        case "subtract":
            result = firstNum - secondNum;
            break;
        case "divide":
            result = firstNum / secondNum;
            break;
        case "multiply":
            result = firstNum * secondNum;
            break;

    }

    console.log(result.toFixed(2));

}

simpleCalculator(5, 5, "add");
simpleCalculator(10, 12, "subtract");
simpleCalculator(9, 3, "divide");
simpleCalculator(5, 2, "divide");
simpleCalculator(3.1, 0.1, "multiply");