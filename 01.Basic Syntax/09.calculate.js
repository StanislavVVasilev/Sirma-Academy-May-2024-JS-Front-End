function calc(numOne, numTwo) {

    let sum = numOne + numTwo;
    let difference = Math.abs(numOne - numTwo);
    let multiply = numOne * numTwo;
    let avg = sum / 2;

    console.log("Sum: " + sum);
    console.log("Difference: " + difference);
    console.log("Product: " + multiply);
    console.log("Average: " + avg);

}

calc(25, 5);
calc(7, 14);
calc(12, 1);
