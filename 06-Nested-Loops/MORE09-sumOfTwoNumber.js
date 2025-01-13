function sumOfTwoNumbers(arg1, arg2, arg3) {
    let start = Number(arg1);
    let end = Number(arg2);
    let magicNumber = Number(arg3);
    let combinationCount = 0;
    let numberFound = false;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            let sum = i + j;
            combinationCount++;

            if (sum === magicNumber) {
                console.log(`Combination N:${combinationCount} (${i} + ${j} = ${magicNumber})`)
                numberFound = true;
                break;
            }
        }

        if (numberFound) {
            break;
        }
    }
    if (!numberFound) {
        console.log(`${combinationCount} combinations - neither equals ${magicNumber}`)
    }
}
sumOfTwoNumbers(23, 24, 20);