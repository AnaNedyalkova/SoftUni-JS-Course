function mirrorWords(arr) {
    let pattern = /([#@])(?<word>[A-Za-z]{3,})\1\1(?<mirrorWord>[A-Za-z]{3,})\1/g;

    let str = arr.shift();
    let matches = Array.from(str.matchAll(pattern));
    let mirrorWords = [];


    if (matches.length > 0) {
        console.log(`${matches.length} word pairs found!`);
    } else {
        console.log(`No word pairs found!`);
    }

        for (let match of matches) {
            let word = match.groups.word;
            let mirrorWord = match.groups.mirrorWord;
            let mirrorWordReversed = mirrorWord.split('').reverse().join('')


            if (word === mirrorWordReversed) {
                mirrorWords.push(`${word} <=> ${mirrorWord}`);

            }
        }

        if (mirrorWords.length > 0) {
            console.log(`The mirror words are:\n` + mirrorWords.join(', '));
            
        }  else {
            console.log(`No mirror words!`);
        }
    
}
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);