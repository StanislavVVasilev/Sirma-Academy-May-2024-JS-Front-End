function evenPairs(firstPairInitial, secondPairInitial, firstPairFinal, secondPairFinal) {

    let endFirstPair = firstPairInitial + firstPairFinal;
    let endSecondPair = secondPairInitial + secondPairFinal;
    let isPrime = true;

    for (let i = firstPairInitial; i <= endFirstPair; i++) {

        for (let ii = 2; ii < i / 2; ii++) {
            if (i % ii == 0) {
                isPrime = false;
                break;
            }
        }

        if (!isPrime) {
            isPrime = true;
            continue;
        }

        for (let j = secondPairInitial; j <= endSecondPair; j++) {

            for (let jj = 2; jj < j / 2; jj++) {
                if (j % jj == 0) {
                    isPrime = false;
                    break;
                }  
            }

            if (!isPrime) {
                isPrime = true;
                continue;
            } 

            console.log(`${i}${j}`);   
        }
    }
}

evenPairs(10, 20, 5, 5);
evenPairs(10, 30, 9, 6);