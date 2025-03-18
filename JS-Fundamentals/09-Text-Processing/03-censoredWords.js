function censoredWords(sentence, hiddenWord) {

    let censored = sentence.replace(hiddenWord, '*'.repeat(hiddenWord.length));

while (censored.includes(hiddenWord)){
    censored = censored.replace(hiddenWord, '*'.repeat(hiddenWord.length))
}
console.log(censored)
}
censoredWords('A small sentence with some words', 'small')