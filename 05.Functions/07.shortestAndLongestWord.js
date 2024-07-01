function shortestAndLongestWord(string) {

    function findShortestWord(word) {

        if (word.length < shortestWord.length) {
            shortestWord = word;
        }

        return shortestWord;
    }

    function findLongestWord(word) {

        if (word.length > longestWord.length) {
            longestWord = word;
        }

        return longestWord;
    }

    let words = string.trim().split(" ");

    let shortestWord = words[0];
    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        let correctWord = words[i].replaceAll(/[^a-zA-Z]/g,"");;

        findLongestWord(correctWord);
        findShortestWord(correctWord);  
        
    }
    
    console.log(`Longest -> ${longestWord}`);
    console.log(`Shortest  -> ${shortestWord}`);
}

shortestAndLongestWord('Hello how are you today? I hope you are fine ');
shortestAndLongestWord('Lorem Ipsum is dummy text of the typesetting industry.');