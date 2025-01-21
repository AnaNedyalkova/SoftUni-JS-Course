function ASCIIValuesOfReversedCharacters(ch1, ch2, ch3) {
    //1. PRints chars in reversr order
    console.log(`${ch3}${ch2}${ch1}`);

    //2. Print ASCII values in reverse order
    let ascii1 = ch1.charCodeAt();
    let ascii2 = ch2.charCodeAt();
    let ascii3 = ch3.charCodeAt();

    console.log(`${ascii3} ${ascii2} ${ascii1}`);

}
ASCIIValuesOfReversedCharacters('a', 'b', 'c');