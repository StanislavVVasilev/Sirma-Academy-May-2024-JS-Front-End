function pyramidOfNumbersA(num) {

    let result = "";
    let counter = 0;
    
    for (let i = 1; i <= num; i++) {
        for (let j = i; j <= i + counter; j++) {  
            if (j > num) {
                break;
            }
            result += j + " ";
        }

        let reversedResult = "";

        for (let i = result.length - 1; i >= 0; i-- ) {
            reversedResult += result[i];
        }
        console.log(reversedResult);
        result = "";
        i = i + counter;
        counter++;
    }
}

pyramidOfNumbersA(7);
// pyramidOfNumbersA(10);
// pyramidOfNumbersA(12);