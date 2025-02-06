function palindromeIntegers(arr) {
    
    function isPalindrome (num) {
        let numStr = num + '';
        let reversedStr = '';

        for (let i = numStr.length - 1; i >= 0; i--) {
            let currentNum = numStr[i];
            reversedStr += currentNum;
        }
        return numStr === reversedStr;
    }

    for (let num of arr) {
        console.log(isPalindrome(num));
    }

}

palindromeIntegers([123, 323, 421, 121]);