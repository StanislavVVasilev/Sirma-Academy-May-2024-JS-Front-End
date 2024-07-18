function leftArrow(num) {
    
    for (let i = 1; i < num; i++) {
        console.log(" ".repeat(num - i - 1) + "*".repeat(i));
    }

    for (let i = 1; i <= num - 2; i++) {
        console.log(" ".repeat(i) + "*".repeat(num - i - 1));
    }
}

leftArrow(5);
leftArrow(4);
leftArrow(10);