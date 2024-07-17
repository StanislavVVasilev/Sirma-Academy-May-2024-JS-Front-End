function uniqueCodes(firstNumLimit, secondNumLimit, thirdNumLimit) {

    let isPrime = true;

    for (let i = 2; i <= firstNumLimit; i += 2) {
        for (let j = 2; j <= secondNumLimit; j++) {

            for (let jj = 2; jj < j; jj++) {
                if (j % jj == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (!isPrime) {
                isPrime = true;
                continue;
            }

            for (let k = 2; k <= thirdNumLimit; k += 2) {
                console.log(`${i} ${j} ${k}`);
            }
        }
    }
}

uniqueCodes(3, 5, 5);
uniqueCodes(6, 2, 6);