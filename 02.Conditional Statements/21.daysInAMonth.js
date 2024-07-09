function daysInAMonth(num) {

    if (num === 2) {
        console.log(28);
    } else if (num === 4 || num === 6 || num === 9 || num === 11) {
        console.log(30);
    } else {
        console.log(31);
    }

}

daysInAMonth(1);
daysInAMonth(2);
daysInAMonth(4);
daysInAMonth(7);