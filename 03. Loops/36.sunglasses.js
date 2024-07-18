function sunglasses(num) {
    
    console.log("*".repeat(num * 2) + " ".repeat(num) + "*".repeat(num * 2));

    for (let i = 1; i < num - 1; i++) {
        let middleRow = Math.floor((num - 1) / 2);
        if (i === middleRow) {
            console.log("*" + "/".repeat(num * 2 - 2) + "*" + "|".repeat(num) + "*" + "/".repeat(num * 2 - 2) + "*");
        } else {
            console.log("*" + "/".repeat(num * 2 - 2) + "*" + " ".repeat(num) + "*" + "/".repeat(num * 2 - 2) + "*");
        }
    }

    console.log("*".repeat(num * 2) + " ".repeat(num) + "*".repeat(num * 2));
}

sunglasses(3);
sunglasses(6);
sunglasses(5);