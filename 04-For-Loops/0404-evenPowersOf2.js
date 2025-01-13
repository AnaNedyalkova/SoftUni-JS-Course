function evenPowersOfTwo(arg) {
    let n = Number(arg);

    for (let i = 0; i <= n; i += 2) {
        let result = Math.pow(2, i);
        console.log(result);
    }
}
evenPowersOfTwo(3);
evenPowersOfTwo(4);
evenPowersOfTwo(5);
evenPowersOfTwo(6);
evenPowersOfTwo(7);
