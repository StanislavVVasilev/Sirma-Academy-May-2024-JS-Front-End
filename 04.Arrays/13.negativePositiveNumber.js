function negativePositiveNumber(arr) {

    let sortedArr = [];
    
    for (const num of arr) {
        num >= 0 ? sortedArr.push(num) : sortedArr.unshift(num);
    }

    console.log(sortedArr.join("\n"));
}

negativePositiveNumber([7, -2, 8, 9]);
negativePositiveNumber([3, -2, 0, -1]);