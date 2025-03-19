function pascalcaseSplitter(str) {
    let words = [];

    let currentWord = '';

    for (let letter of str) {
        
        if (letter === letter.toUpperCase() && currentWord !== '') {
            words.push(currentWord);
            currentWord = letter; // starts a new word
        } else {
            currentWord += letter;
        }
    }

    words.push(currentWord); // push the last word

    console.log(words.join(', '))
}
pascalcaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');