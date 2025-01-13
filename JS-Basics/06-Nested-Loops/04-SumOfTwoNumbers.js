function sumOfTwoNumbers(arg1, arg2, arg3) {
    let start = Number(arg1);
    let end = Number(arg2);
    let magicNumber = Number(arg3);
    let counter = 0;
    let isFound = false;

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            let sum = x + y;
            counter++;

            if (sum === magicNumber) {
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }

        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }

}
//sumOfTwoNumbers(1, 10, 5);
//sumOfTwoNumbers(88, 888, 1000);
sumOfTwoNumbers(23, 24, 20);
//sumOfTwoNumbers(88, 888, 2000);


