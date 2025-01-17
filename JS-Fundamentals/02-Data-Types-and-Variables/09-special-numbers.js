function specialNumber(n) {

    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;  //copy i, do not overrite 'i' - we need it for print
        
        while(num > 0) {
            let lastDigit = num % 10;  // takes the last digit
            sum += lastDigit;  //addds last digit to the sum
            num = parseInt(num / 10); // reset the number, removed the las digit so it leave only the first or 0 if it's 1 digit number
        }

        let isMagic = sum == 5 || sum == 7 || sum == 11; //ternaren operator to make the check
        console.log (i, "->", isMagic ? "True": "False")
    }
}


// function specialNumberStr(n) {
//     for (let i = 1; i <= n; i++) {
//         let iAsString = "" + i;
//         let sum = 0;
//         for (let character of iAsString) {
//             sum += Number(character);
//         }
//         let isMagic = sum == 5 || sum == 7 || sum == 11;
//         console.log(i, '->', isMagic ? 'True' : 'False');
//     }
// }
specialNumber(15);