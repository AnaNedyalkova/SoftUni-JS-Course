function printAndSum(start, end) {
    let sum = 0;
    let result = '';

    for (let i = start; i <= end; i++) {
        sum += i;
        result += `${i} `
    }
    
    console.log(result);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);