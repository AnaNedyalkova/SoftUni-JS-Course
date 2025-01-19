function caluclator(n1, operator, n2) {

    switch (operator) {
        case "+": {
            let brada = 'bradichka';
            console.log((n1 + n2).toFixed(2));
            break;
        }
        case "-":
            console.log((n1 - n2).toFixed(2));
            break;
        case "*":
            console.log((n1 * n2).toFixed(2));
            break;
        case "/": {
            let brada = 'brada'
            console.log((n1 / n2).toFixed(2));
            break;
        }
    }
}
caluclator(5, '+', 10);