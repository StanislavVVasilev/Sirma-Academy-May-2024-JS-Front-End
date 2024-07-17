function pyramidOfNumbers(num) {

    let result = "";
    let counter = 0;
    
    for (let i = 1; i <= num; i++) {
        for (let j = i; j <= i + counter; j++) {  
            if (j > num) {
                break;
            }
            result += j + " ";
        }
        console.log(result);
        result = "";
        i = i + counter;
        counter++;
    }
}

pyramidOfNumbers(7);
pyramidOfNumbers(10);
pyramidOfNumbers(15);