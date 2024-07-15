function collatzSequence(num) {

    let collatzNum = num;
    let result = "";

    while (collatzNum >= 1) {

        result += collatzNum + " ";

        if (collatzNum === 1) {
            break;
        } else if (collatzNum % 2 === 0) {
            collatzNum /= 2;
        } else {
            collatzNum = collatzNum * 3 + 1;
        }    
    }
    console.log(result);
}

collatzSequence(6);
collatzSequence(12);
collatzSequence(9);
collatzSequence(200);
collatzSequence(15);