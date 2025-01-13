function multiplicationTable (factor) {
// TODO:
// 1. For loop
// 1.1. Calculate multiplication
// 1,2. Print result

for (let currentFactor = 1; currentFactor <= 10; currentFactor++) {
    let result = currentFactor * factor;
    console.log(`${currentFactor} * ${factor} = ${result}`);
}
}
multiplicationTable(5);