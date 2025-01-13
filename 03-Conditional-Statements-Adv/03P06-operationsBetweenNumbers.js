//TODO
// 1. Handle + - * x
// 1.1. Calculate result
// 1.2. Find even or odd
// 1.3. Print result
// 2. Handle / and %
// 2.1. Handle zero as num2 and Print 
// 2.2. Calculate /
// 2.3. Calculate %
// 2.4. Print Result
function operationsBetweenNumbers(num1, num2, operator) {
    if (operator === '+' || operator === '-' || operator === '*') {

        let result = 0;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
        }

        let evenOrOdd = '';

        if (result % 2 === 0) {
            evenOrOdd = 'even';
        } else {
            evenOrOdd = 'odd';
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`)
    } else {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
            let result = 0;
            switch (operator) {
                case '/':
                    result = (num1 / num2).toFixed(2);
                    break;
                case '%':
                    result = num1 % num2;
                    break;
            }
            console.log(`${num1} ${operator} ${num2} = ${result}`);

        }
    }

}
operationsBetweenNumbers(10, 12, "+");
operationsBetweenNumbers(123, 12, "/");
operationsBetweenNumbers(112, 0, "/");
operationsBetweenNumbers(10, 1, "-");
operationsBetweenNumbers(10, 3, "%");
operationsBetweenNumbers(10, 0, "%");
operationsBetweenNumbers(7, 3, "*");