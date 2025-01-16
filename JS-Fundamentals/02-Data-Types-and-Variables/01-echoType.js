function echoType (input) {
let inputToPrint;
    
console.log(typeof(input));
    
    if (typeof(input) === "string" || typeof(input) === "number") {
        inputToPrint = input;
        console.log(inputToPrint);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

echoType('Hello, JavaScript!');
echoType(18);
echoType(null);