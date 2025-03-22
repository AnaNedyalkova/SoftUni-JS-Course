function lettersChangesNumbers(text) {

    let strs = text.split(' ').filter(str => str != ''); //remove the empty spaces from our str/array
    let strsRegex = text.split(/[\s]+/g); // same as above but split by regex
    let totalSum = 0;
    
    for (let str of strs) {
        let firstLetter = str[0];
        let lastLetter = str[str.length - 1];
        let num = Number(str.slice(1, str.length - 1));
        
        if (firstLetter == firstLetter.toUpperCase()) {
            let code = firstLetter.charCodeAt();
            // how to find letter's position in the Alphabet for uppercase
            let position = code - 64;
            num /= position;
        } else {
            // how to find letter's position in the Alphabet for uppercase
            let position = firstLetter.charCodeAt() - 96;
            num *= position;
        }
        
        if (lastLetter == lastLetter.toUpperCase()) {
            let position = lastLetter.charCodeAt() - 64;
            num -= position;
            
        } else {
            let position = lastLetter.charCodeAt() - 96;
            num += position;
        }
        totalSum += num;
    }
    console.log(totalSum.toFixed(2))

}
//lettersChangesNumbers('A12b s17G');
lettersChangesNumbers('P34562Z q2576f   H456z');