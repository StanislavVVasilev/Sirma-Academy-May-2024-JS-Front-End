function squareFrame(num) {
    
    for (let i = 1; i <= num; i++) {
        if (i == 1 || i == num) {
            console.log("+ " + "- ".repeat(Math.max(0, num - 2)) + "+ ");
        } else {
            console.log("| " + "- ".repeat(Math.max(0, num - 2)) + "| ");
        }
    }

}

squareFrame(3);
squareFrame(4);
squareFrame(5);
squareFrame(6);