function wordOccurenceV2(arr) {
    let wordsObj = {};

    for (let word of arr) {
        if (!(word in wordsObj)) {
            wordsObj[word] = 0;
        }
        wordsObj[word] += 1;
    }

    sortedWords = Object.entries(wordsObj);
    sortedWords.sort((a,b) => b[1] - a[1]);

    for (let el of sortedWords) {
        console.log(`${el[0]} -> ${el[1]} times`)
    }
}

wordOccurenceV2(
    ["Here", "is", "the", "first", "sentence",
        "Here", "is", "another", "sentence",
        "And", "finally", "the", "third", "sentence"])