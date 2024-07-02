function printNthElement(stringsArr, step) {

    let nthElements = [];
    
    for (let i = 0; i < stringsArr.length; i += step) {
        nthElements.push(stringsArr[i]);
    }

    console.log(nthElements.join(" "));
}

printNthElement(['5', '15', '31', '14', '20'], 2);
printNthElement(['dsa', 'asd', "demo", 'test'], 2);
printNthElement(['1', '2', '3', '4', '5'], 6);