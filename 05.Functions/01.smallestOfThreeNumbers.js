function smallestOfThree(firstNum, secondNum, thirdNum) {
    
    let smallestOfTwo = (a, b) => a <= b ? a : b;
    let resultFirstTwo = smallestOfTwo(firstNum, secondNum);
    let result = smallestOfTwo(resultFirstTwo, thirdNum);
    console.log(result);

}

smallestOfThree(2, 5, 3);
smallestOfThree(600, 342, 123);
smallestOfThree(25, 21, 4);