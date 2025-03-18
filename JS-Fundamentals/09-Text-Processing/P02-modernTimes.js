function modernTimes(text) {
    let textArr = text
        .split(' ')
        .filter(word => word.startsWith('#') && word.length > 1);

        for (let word of textArr) {
            word = word.slice(1);  //remove the #

            let pattern = /\b[A-Za-z]+\b/;  // RegEx pattern for only letters
            if(pattern.test(word)){
                console.log(word);
            }
        }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');