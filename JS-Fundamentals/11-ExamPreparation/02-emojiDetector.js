function emojiDetector(arr) {
    let pattern = /(\*\*|::)(?<name>[A-Z][a-z]{2,})\1/g;
    let str = arr.shift();
    let digits = str.match(/\d/g);
    let coolTreshhold = 1;
    
    for (let digit of digits) {
        coolTreshhold *= digit;
    }
    console.log(`Cool threshold: ${coolTreshhold}`);

    let validEmojis = Array.from(str.matchAll(pattern));
    
    console.log(`${validEmojis.length} emojis found in the text. The cool ones are:`);
    
    for (let coolEmoji of validEmojis) {
        let emojiWord = coolEmoji.groups.name;
        let coolness = 0;

        for (let symbol of emojiWord) {
            let value = symbol.charCodeAt();
            coolness += value;
        }

        if(coolness >= coolTreshhold) {
            console.log(coolEmoji[0])
        }
    }

}
emojiDetector((
["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]))