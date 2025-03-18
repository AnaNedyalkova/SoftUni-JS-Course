function cutNreverse(str) {
    let midIndex = str.length / 2;

    let firstWord = str.slice(0, midIndex)
        .split('')
        .reverse()
        .join('');
    console.log(firstWord)
    
    let secondWord = str.substring(midIndex)
        .split('')
        .reverse()
        .join('');
    console.log(secondWord)
}
cutNreverse('tluciffiDsIsihTgnizamAoSsIsihT');