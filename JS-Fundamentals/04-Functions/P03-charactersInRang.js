function charactersInRang(char1, char2) {
    let allChars = [];
    let code1 = char1.charCodeAt(); // make char into number
    let code2 = char2.charCodeAt();

    let startCode = Math.min(code1, code2);  // pick the smallest num to be first
    let endCode = Math.max(code1, code2); //pick the biggest num to be last 



    for (let currentCode = startCode + 1; currentCode < endCode; currentCode++) {
        let currentChar = String.fromCharCode(currentCode); //make number into char
        allChars.push(currentChar);
    }
    console.log(allChars.join(' '))
}
charactersInRang('C',

'#');