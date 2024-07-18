function hourglass(num) {

    let middle = Math.ceil(num / 2);
    
    console.log("#".repeat(num + 2));

    for (let i = 1; i < middle; i++) {
        console.log(" ".repeat(i) + "#" + " ".repeat(num - i * 2) + "#");
    }

    if (num % 2 != 0){
        console.log(" ".repeat(num / 2 + 1) + "#");
    } else {
        console.log(" ".repeat(num / 2) + "##");
    }

    for (let i = middle - 1; i >= 1; i--) {
        console.log(" ".repeat(i) + "#" + " ".repeat(num - i * 2) + "#");
    }

    console.log("#".repeat(num + 2));
}

hourglass(5);
hourglass(8);
hourglass(2);