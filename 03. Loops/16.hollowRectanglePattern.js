function hollowRecatnglePattern(n, m) {
    
    for (let rows = 1; rows <= n; rows++) {  
        if (rows === 1 || rows === n) {
            console.log("*".repeat(m));
        } else {
            console.log("*" + " ".repeat(m - 2) + "*");
        }
    }
}

hollowRecatnglePattern(4, 6);
hollowRecatnglePattern(2, 2);
hollowRecatnglePattern(3, 4);