function wordsTracker(arr) {
    let wordsToTrack = arr.shift().split(' ');
    let wordsOccurences = {};

    // fill the ass array with words to track - key and value
    for (const word of wordsToTrack) {
        wordsOccurences[word] = 0;
    }
    // go trought all words and if find -> increment
    for (const word of arr) {
        if (word in wordsOccurences) {
            wordsOccurences[word]++;
        }
    }
    //turn to array, iterative
    const entries = Object.entries(wordsOccurences);
    //sort
    entries.sort((a,b) => b[1] - a[1]);

    for (const [word, occurences] of entries) {
        console.log(`${word} - ${occurences}`);
    }

}
wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);