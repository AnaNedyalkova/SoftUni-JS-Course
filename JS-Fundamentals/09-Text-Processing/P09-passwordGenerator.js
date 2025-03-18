function passwordGenerator(arr) {
    let [str1, str2, word] = arr;
    let concatStr = str1.concat(str2);
    let replacedIndex = 0;
    let vowels = ['a', 'o', 'u', 'i', 'e']

    for (let letter of concatStr) {

        if(vowels.includes(letter)){
            let replacementLetter = word.toUpperCase()[replacedIndex];
            concatStr = concatStr.replace(letter, replacementLetter);
            replacedIndex++;
        }
    }
    console.log(concatStr)
}
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]);