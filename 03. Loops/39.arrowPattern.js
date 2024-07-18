function arrowPattern(num) {

    for (let i = 1; i < num; i++) {
        console.log(" ".repeat(num - 1 - i) + "* ".repeat(i));
    }

    for (let i = 1; i < num; i++) {
        if (num % 2 == 0) {
            console.log(" ".repeat(Math.floor((num - 1) / 2)) + "*".repeat(num - 1));
        } else {
            console.log(" ".repeat(Math.floor((num - 1) / 2)) + "*".repeat(num - 2));
        }
    }
}

arrowPattern(7);
arrowPattern(4);
arrowPattern(6);