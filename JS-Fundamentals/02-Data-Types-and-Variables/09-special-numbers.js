function specialNumber(n) {
    
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;

        while (num > 0) {
            let lastDigit = num % 10; //take last digit
            sum += lastDigit;  //agregate total sum
            num = parseInt(num / 10); //remove last digit 
        }

        let isMagic = sum == 5 || sum == 7 || sum == 11;
        console.log(i, '->', isMagic ? 'True' : 'False');
    }
}

function specialNumberStr(n) {
    for (let i = 1; i <= n; i++) {
        let iAsString = "" + i;
        let sum = 0;
        for (let character of iAsString) {
            sum += Number(character);
        }
        let isMagic = sum == 5 || sum == 7 || sum == 11;
        console.log(i, '->', isMagic ? 'True' : 'False');
    }
}
specialNumberStr(15);