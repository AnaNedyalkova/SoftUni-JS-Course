function trianglesOfNumbers(n) {
    let result = '';

    for (let i = 1; i <= n; i++) {
        for (let j= 1; j<= i; j++) {
            result += `${i} `
        }
        console.log(result)
        result = '';
    }
}
trianglesOfNumbers(3);
trianglesOfNumbers(5);