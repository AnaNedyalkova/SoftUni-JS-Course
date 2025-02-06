function factorialDivision(n1, n2) {
    
    function calcFactorial(num) {
        let factorial = 1; // we put 1 because factorial = 3! = 1x2x3

        for (let factor = 2; factor <= num; factor++) {
            factorial *= factor;
        }

        return factorial;
    }

    let factorial1 = calcFactorial(n1);
    let factoriaL2 = calcFactorial(n2);

    let quotient = factorial1 / factoriaL2;
    console.log(quotient.toFixed(2))
}
factorialDivision(5, 2);
factorialDivision(6, 2);