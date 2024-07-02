function reverseAnArrayOfNums(num, arrayOfElements) {

    const reversedArray = [];

    for (let i = 0; i < num; i++) {
        reversedArray[i] = arrayOfElements[num - i - 1];
    }

    console.log(reversedArray.join(" "));
    
}
reverseAnArrayOfNums(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNums(4, [-1, 20, 99, 5]);
reverseAnArrayOfNums(2, [66, 43, 75, 89, 47]);