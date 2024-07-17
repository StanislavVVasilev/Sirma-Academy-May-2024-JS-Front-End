function encoding(num) {

    let numCountToPrint;

    while (num) {
        numCountToPrint = num % 10;
        num = Math.floor(num / 10);

        if (numCountToPrint === 0) {
            console.log("ZERO");
        } else {
            let asciiSymbol = numCountToPrint + 33;
            console.log(String.fromCharCode(asciiSymbol).repeat(numCountToPrint));
        }
    }
    
}

encoding(2049);
encoding(9347439);