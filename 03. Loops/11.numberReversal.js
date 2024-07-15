function numberReversal(number) {

    let numberToString = number.toString();
    let reverseNum = "";
    
    for (let i = numberToString.length - 1; i >= 0; i--) {
        reverseNum += numberToString[i];
    }
    console.log(reverseNum);

}

numberReversal(123);
numberReversal(9876);
numberReversal(505);
numberReversal(10203);
numberReversal(7);