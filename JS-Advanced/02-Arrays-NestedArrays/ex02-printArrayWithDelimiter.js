function printArrayWithNelement(data, step) {
    let result = [];

    for (let i = 0; i < data.length; i += step) {
        result.push(data[i]);
    }
    return result
}
console.log(printArrayWithNelement(
    ['5',
        '20',
        '31',
        '4',
        '20'],
    2))
