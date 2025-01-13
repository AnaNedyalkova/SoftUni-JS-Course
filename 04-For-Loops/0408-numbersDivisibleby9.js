function numberDisibleBy9(arg1, arg2) {
    let start = Number(arg1);
    let end = Number(arg2);

    let sum = 0;
    let buffer = '';

    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
            buffer += i + "\n";
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(buffer)
}
numberDisibleBy9(100, 200);