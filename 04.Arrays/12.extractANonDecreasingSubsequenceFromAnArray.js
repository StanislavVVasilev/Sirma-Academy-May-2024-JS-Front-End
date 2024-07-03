function extract(numbers) {

    let biggestNum = numbers[0];
    let extract = [];

    for (const num of numbers) {

        if (num >= biggestNum) {
            biggestNum = num;
            extract.push(biggestNum);
        }
    }
    
    console.log(extract.join(" "));

}

extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extract([1, 2, 3, 4]);
extract([20, 3, 2, 15, 6, 1]);
