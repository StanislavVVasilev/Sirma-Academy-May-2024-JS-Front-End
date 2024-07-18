function pyramidWithIncreasingDigits(num) {

    let counter = 0;
    let result = "";

    for (let i = 1; i <= num; i++) {

        result += " ".repeat(num - i);

        for (let j = i; j <= i + counter; j++) {
            result += j;
        }

        for (let j = i + counter; j > i; j--) {
            result += j - 1;
        }

        console.log(result);
        result = "";
        counter++;
    }
}

pyramidWithIncreasingDigits(5);
pyramidWithIncreasingDigits(4);
pyramidWithIncreasingDigits(3);