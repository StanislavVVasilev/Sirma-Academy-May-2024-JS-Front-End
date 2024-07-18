function passwordGenerator(n, l) {

    let buffer = "";

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            for (let k = 97; k < 97 + l; k++) {
                for (let m = 97; m < 97 + l; m++) {
                    for (let o = Math.max(i,j) + 1; o <= n; o++) {
                        buffer += `${i}${j}${String.fromCharCode(k)}${String.fromCharCode(m)}${o}\n`
                    }
                }
            }
        }
    }

    console.log(buffer.trim());

}

passwordGenerator(2, 4);
passwordGenerator(3, 1);