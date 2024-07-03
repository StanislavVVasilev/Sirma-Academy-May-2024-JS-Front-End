function rotateArray(arrOfStrings, rotations) {

    let lengthOfArray = arrOfStrings.length;
    let rotationsCount = rotations % lengthOfArray;
    
    for (let i = 0; i < rotationsCount; i++) {
       arrOfStrings.unshift(arrOfStrings.pop())
    }

    console.log(arrOfStrings.join(" "));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);