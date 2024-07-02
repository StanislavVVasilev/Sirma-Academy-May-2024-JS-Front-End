function reverseAnArrayOfStrings(arrOfStrings) {

    for (let i = 0; i < arrOfStrings.length / 2; i++) {

        swap(arrOfStrings);

        function swap(arr) {
            let buffer = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = buffer;

            return arr;
        }
    }

    console.log(arrOfStrings.join(" "));
}
    
    

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
reverseAnArrayOfStrings(['33', '123', '0', 'dd']);