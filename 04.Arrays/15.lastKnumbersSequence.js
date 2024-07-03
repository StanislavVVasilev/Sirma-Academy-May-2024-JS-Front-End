function lastKNumbersSequence(n, k) {

    let sequence = [1];

    while (sequence.length < n) {

        let sumKElements = 0;

        for (let i = Math.max(0, sequence.length - k); i < sequence.length; i++) {
            sumKElements += sequence[i];
        }

        sequence.push(sumKElements);
    }

    console.log(...sequence);
    
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);