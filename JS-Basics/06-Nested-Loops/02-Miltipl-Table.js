function multiplicationTable(input) {
    let sum = 0;
    for (x = 1; x <= 10; x++) {
        for (let y = 1; y <= 10; y++) {
            console.log(`${x} * ${y} = ${x * y}`)

        }
    }
}
multiplicationTable();