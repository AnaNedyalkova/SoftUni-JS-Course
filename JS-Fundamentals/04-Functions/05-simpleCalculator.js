function simpleCalculator (numA, numB, op) {
    switch(op) {
        case 'multiply': multiply(numA, numB); break;
        case 'divide': divide(numA, numB); break;
        case 'add': add(numA, numB); break;
        case 'subtract': subtract(numA,numB); break;
    }

    function multiply(a,b) {  ///same as let multiply = (a,b) => console.log(a*b)
        console.log(a*b);
    }
    function divide(a,b){
        console.log(a/b);
    }
    function add(a,b){
        console.log(a+b);
    }
    function subtract(a,b){
        console.log(a-b);
    }
}

simpleCalculator(40,8,'divide');