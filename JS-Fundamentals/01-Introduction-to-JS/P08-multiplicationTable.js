function multiplicationTable(n) {
    let num = Number(n);
    let result = 0;

    for (let i = 1; i <= 10; i++) {
        result = i * num;
        console.log(`${num} X ${i} = ${result}`);

        result = 0;

    }

}
multiplicationTable(2);