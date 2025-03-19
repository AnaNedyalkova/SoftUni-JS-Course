function passwordGenerator(arr) {
    let [str1, str2, word] = arr;
    let concatStr = str1.concat(str2);
    let replacementIndex = 0;
    let vowels = ['a', 'o', 'u', 'i', 'e']

    for (let letter of concatStr) {

        if (vowels.includes(letter)) {
            let replacementLetter = word.toUpperCase()[replacementIndex];
            concatStr = concatStr.replace(letter, replacementLetter);
            replacementIndex++;

            if (replacementIndex >= word.length) {
                replacementIndex = 0;   // return back the index to 0 because the indexes from 'word' are finished 
            }
        }
    }

    let pass = concatStr.split('').reverse().join('');
    console.log(`Your generated password is ${pass}`)
}
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]);