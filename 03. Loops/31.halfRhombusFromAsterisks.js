function halfRhombus(num) {
    
    for (let i = 1; i <= num; i++) {
        console.log("* ".repeat(i));
    }

    for (let i = num - 1; i >= 1; i--) {
        console.log("* ".repeat(i));
    }
}

halfRhombus(1);
halfRhombus(2);
halfRhombus(3);
halfRhombus(4);