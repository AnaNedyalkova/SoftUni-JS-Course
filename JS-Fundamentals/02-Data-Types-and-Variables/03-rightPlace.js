function rightPlace (value, char, expectedValue) {
    let newText = value.replace("_",char); //оператор replade
    let result = "";

//спестява условна конструкция, тернарен оператор
    result = newText === expectedValue ? "Matched" : "Not Matched";
    console.log(result);
}
rightPlace('Str_ng', 'I', 'Strong');