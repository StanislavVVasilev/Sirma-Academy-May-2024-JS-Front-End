function charsInRange(firstChar, secondChar) {

    let chars = [];

    function printChars(start, end) {
        for (let i = start + 1; i < end; i++) {
            chars.push(String.fromCharCode(i));
        }

        console.log(...chars);
    }

    let start = firstChar.charCodeAt();
    let end = secondChar.charCodeAt();

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    printChars(start, end);
}

charsInRange('a', 'd');
charsInRange('#', ':');
charsInRange('C', '#');