function palindrome(word) {

    let reversedWord = "";
    
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }

    let isPalindrome = word === reversedWord;

    console.log(isPalindrome);
}

palindrome("radar");
palindrome("hello");
palindrome("racecar");
palindrome("java");
palindrome("madam");