function staircase(num) {

    let counter = 0;
    
    for (let i = 1; i <= num; i++) {
        console.log(" ".repeat(counter) + "#".repeat(i));
        counter += i - 1;
    }
}

staircase(5);
staircase(4);
staircase(2);