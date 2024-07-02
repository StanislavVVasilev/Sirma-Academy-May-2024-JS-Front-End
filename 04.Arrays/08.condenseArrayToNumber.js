function condenseArray(numbersArr) {

    while (numbersArr.length > 1) {
        let condensed = [];

        for (let i = 0; i < numbersArr.length - 1; i++) {
            condensed[i] = numbersArr[i] + numbersArr[i + 1];
        }
        numbersArr = condensed;
    }
    
    console.log(numbersArr[0]);
}

condenseArray([2,10,3]);
condenseArray([5,0,4,1,2]);
// 5 4 5 3
// 9 9 8
// 18 17
// 35

condenseArray([1]);