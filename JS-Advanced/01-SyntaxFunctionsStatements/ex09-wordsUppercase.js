function wordsUppercase (str) {
    let pattern = str.split(/[\W]/).filter(x => x !== '').join(', ').toUpperCase();
    console.log(pattern);
    
}
wordsUppercase('Hi, how are you?');