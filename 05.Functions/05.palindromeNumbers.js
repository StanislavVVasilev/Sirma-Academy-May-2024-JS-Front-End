function palindromeNumbers(nums) {

    nums.forEach(el => {

        el = String(el);
        let isPalindrome = true;

        for (let i = 0; i < el.length / 2; i++) {

            if (el[i] !== el[el.length - i - 1]) {
                isPalindrome = false;
                break;
            }
        }

        console.log(isPalindrome);
    });
}

palindromeNumbers([123,323,421,121]);
palindromeNumbers([32,2,232,1010]);