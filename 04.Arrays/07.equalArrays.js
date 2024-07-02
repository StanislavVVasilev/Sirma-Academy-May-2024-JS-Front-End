function equalArrays(firstStringArr, secondStringArr) {

    let sumFirstArr = 0;
    let indexDiff;
    let isDifference = false;

    for (let i = 0; i < firstStringArr.length; i++) {
        if (firstStringArr[i] === secondStringArr[i]) {
            sumFirstArr += Number(firstStringArr[i]);
        } else {
            indexDiff = i;
            isDifference = true;
            break;
        }
    }

    if (isDifference) {
        console.log(`Arrays are not identical. Found difference at ${indexDiff} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sumFirstArr}`);
    }
    
}

equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ["10"]);