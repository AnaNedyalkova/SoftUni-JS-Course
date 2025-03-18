function countStringOccurrences(sentence, word) {
    let result = 0;
    let sentenceArr = sentence.split(' ');

    for (let el of sentenceArr) {
        if (el === word) {
            result++;
        }
    }
    console.log(result);
}
countStringOccurrences('This is a word and it also is a sentence',
    'is');