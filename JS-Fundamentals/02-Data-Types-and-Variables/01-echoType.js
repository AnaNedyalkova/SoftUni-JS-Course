function echoType (input) {
let inputToPrint;
    
    if (typeof(input) === "string" || typeof(input === "number")) {
        inputToPrint = input;
    } else {
        console.log('Parameter is not suitable for printing');
    }
    console.log(typeof(input));
    console.log(inputToPrint);
}

//echoType('Hello, JavaScript!');
//echoType(18);
echoType(null);