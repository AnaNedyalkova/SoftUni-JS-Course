function revealWord(searchWords, template) {
    let wordsForFilling = searchWords.split(', ');

    for (let word of wordsForFilling) {
        let starTemplate = '*'.repeat(word.length);
        template = template.replace(starTemplate, word)
    }
    console.log(template)
}
revealWord('great, learning',
'softuni is ***** place for ******** new programming languages');