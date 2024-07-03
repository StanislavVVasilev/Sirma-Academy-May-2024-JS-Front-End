function firstAndLastKNumbers(k, numbers) {

    console.log(...numbers.slice(0, k));
    console.log(...numbers.slice(- k));
    
}

firstAndLastKNumbers(2, [7, 8, 9]);
firstAndLastKNumbers(3, [6, 7, 8, 9]);