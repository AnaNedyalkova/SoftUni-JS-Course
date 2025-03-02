function wordOccurence(arr) {
    let wordsMap = new Map();

    for (let word of arr) {

        if (!wordsMap.has(word)) {
            wordsMap.set(word, 1);
        } else {
            wordsMap.set(word, wordsMap.get(word) + 1);
        }
    }

    let sortedMap = Array.from(wordsMap).sort((a,b) => b[1] - a[1]);
    
    console.log(sortedMap)
    for (el of sortedMap) {
        console.log(`${el[0]} -> ${el[1]} times`)
    }
}
wordOccurence(
    ["Here", "is", "the", "first", "sentence",
        "Here", "is", "another", "sentence",
        "And", "finally", "the", "third", "sentence"])