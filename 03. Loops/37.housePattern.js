function housePattern(num) {

    if (num % 2 != 0) {
        for (let i = 0; i < Math.ceil(num / 2); i++) {
            console.log(" ".repeat(Math.floor(num / 2 - i)) + "*".repeat(i * 2 + 1));
        }
        console.log(("*" + " ".repeat(num - 2) + "*" + "\n").repeat(2).trim());
    } else {
        for (let i = 2; i <= num; i += 2) {
            console.log(" ".repeat(num - i) + "* ".repeat(i));
        }
        console.log(("*" + " ".repeat(num * 2 - 3) + "*" + "\n").repeat(2).trim());
    }
}

housePattern(7);
housePattern(4);
housePattern(3);