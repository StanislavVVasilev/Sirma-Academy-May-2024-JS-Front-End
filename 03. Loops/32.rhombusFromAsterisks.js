function rhombusFromAsterisks(num) {

    for (let i = 1; i <= num; i++) {
        console.log(" ".repeat(num - i) + "* ".repeat(i));
    }

    for (let i = 1; i < num; i++) {
        console.log(" ".repeat(i) + "* ".repeat(num - i));
    }
    
}

rhombusFromAsterisks(1);
rhombusFromAsterisks(2);
rhombusFromAsterisks(3);
rhombusFromAsterisks(4);