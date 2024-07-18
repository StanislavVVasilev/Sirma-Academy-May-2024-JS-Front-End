function christmasTree(num) {

    console.log(" ".repeat(num + 1) + "|");
    for (let i = 1; i <= num; i++) {
        console.log(" ".repeat(num - i) + "*".repeat(i) + " | " + "*".repeat(i));
    }
}

christmasTree(1);
christmasTree(2);
christmasTree(3);
christmasTree(4);