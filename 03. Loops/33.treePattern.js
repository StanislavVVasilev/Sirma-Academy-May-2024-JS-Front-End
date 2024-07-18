function treePattern(num) {

    console.log(" ".repeat(num - 1) + "*");
    for (let i = 1; i < num; i++) {
       console.log(" ".repeat(num - i - 1) + "*".repeat(i * 2 + 1)); 
    }
    console.log(" ".repeat(num - 1) + "*");
}

treePattern(6);
treePattern(4);
treePattern(3);