function magicNumber(start, end, magicNum) {

    let combinations = 0;
    
    for (let firstNum = start; firstNum <= end; firstNum++) {
        for (let secondNum = start; secondNum <= end; secondNum++) {
            
            let isMagicNum = firstNum + secondNum === magicNum;

            combinations++;

            if (isMagicNum) {
                console.log(`Combination ${combinations} - (${firstNum} + ${secondNum} = ${magicNum})`);
                return;
            }
        }
    }

    console.log(`${combinations} combinations - neither equals ${magicNum}`);
}

magicNumber(1, 10, 5);
magicNumber(23, 24, 20);
magicNumber(1, 2, 3);