function numberInRange(num) {

    if (num === 0 || num < -100 || num > 100) {
        console.log("No");
    } else {
        console.log("Yes");
    }

}

numberInRange(-25);
numberInRange(0);
numberInRange(25);
numberInRange(100);
numberInRange(-100);
numberInRange(-101);
numberInRange(101);