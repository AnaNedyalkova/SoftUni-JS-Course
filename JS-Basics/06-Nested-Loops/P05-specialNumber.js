function specialNumbers(number) {
    // TODO:
    // 1. Create helper variable (result)
    // 2. For loop
    // 2.1. Get current number as String 
    // 2.2. Create flag (is special)
    // 2.3. For Loop
    // 2.3.1. Get current digit
    // 2.3.2. Check if it is special
    // 2.4. Handle is special
    // 3.3 Print result

    let result = '';

    for (let currentNumber = 1111; currentNumber <= 9999; currentNumber++) {
        let currentNumberStr = String(currentNumber);
        let isSpecial = true;

        for (let i = 0; i < currentNumberStr.length; i++) {
            let digit = Number(currentNumberStr[i]);


            if (number % digit !== 0) {
                isSpecial = false;
                break;
        }
    }
    if(isSpecial) {
        result += currentNumber + ' ';
    }

}
console.log (result)
}
//specialNumbers(3);
specialNumbers(11);
//specialNumbers(16);
