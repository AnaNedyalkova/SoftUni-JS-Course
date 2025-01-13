function equalSumsEvenOddsPosition(number1, number2) {
    //TODO:
    // 1. Create helper variables (result)
    // 2. For loops
    // 2.1. Get current number as a string
    // 2.2.Create helper variables 
    // 2.2.1. Even sum
    // 2.2.2. Odd Sum
    // 2.3. For loop
    // 2.3.1. Get current digit
    // 2.3.2. Handle even.odd position
    // 2.4. Handle equal sums
    // 3. Print results

    let result = '';

    for (let currentNumber = number1; currentNumber <= number2; currentNumber++) {
        let currentNumberStr = String(currentNumber);

        let evenPositionsSum = 0;
        let oddPositionsSum = 0;

        for (let i = 0; i < currentNumberStr.length; i++) {
            let digit = Number(currentNumberStr[i]);

            if(i % 2 === 0) {
                evenPositionsSum += digit;
            } else {
                oddPositionsSum += digit;
            }
        }
        if (evenPositionsSum === oddPositionsSum) {
            result += currentNumber + ' ';
        }

    }
    console.log(result);

}
equalSumsEvenOddsPosition(100000, 100050);
equalSumsEvenOddsPosition(123456, 124000);
equalSumsEvenOddsPosition(299900, 300000);
equalSumsEvenOddsPosition(100115, 100120);