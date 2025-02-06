// STATIC METHODS
// 1.1. String.fromCharCode()
let c = 104;
let char = String.fromCharCode(c);
console.log(char); //=> h

// 1.2. charCodeAt() 
// returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index 
// syntax: charCodeAt(index)
let text04 = 'greetings';
let code = text04.charCodeAt(2);
console.log(code); //=> 108 

// INSTANCE METHODS
// 2. charAt()
let text = 'hello';
let letter = text.charAt(2);
console.log(letter); //=> l

// 3.length
let text01 = 'Ana';
let lenght = text01.length;
console.log(lenght); //=> 3

// 4. replace
// syntax: replaceAll(pattern, replacement)
let text02 = 'Fransis is my cat';
let changed = text02.replace('cat', 'dog');
console.log(changed); //=> Fransis is my dog

// 5. replaceAll  
// syntax: replaceAll(pattern, replacement)
let text03 = 'is cat, or is dog';
let v2 = text03.replaceAll('is', 'fly');
console.log(v2); //=> fly cat, or fly dog

// 6. split()
// takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
// syntax: split(separator) // split(separator, limit)
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]); // => "fox"
const chars = str.split('');
console.log(chars[8]); // => "k"
const strCopy = str.split();
console.log(strCopy);// => Array ["The quick brown fox jumps over the lazy dog."]

// 7. toUpperCase | toLowerCase
// returns this string converted to uppercase | lowercase
let text05 = 'Ana';
let newName = text05.toLocaleUpperCase();
console.log(newName); // => ANA

// 8. includes 
// performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
// syntax: includes(searchString) | includes(searchString, position)
let sentence = 'The quick brown fox jumps over the lazy dog.';
let word = 'fox';
console.log(`The word ${word} ${sentence.includes(word) ? 'is' : 'is not'} in the sentence.`) //=> The word fox is in the sentence.

// 9. slice()
// extracts the text from one string and returns a new string.
// syntax: slice(indexStart) | slice(indexStart, indexEnd) 
// where indexStart - The index of the first character to include in the returned substring.
// indexEnd Optional - The index of the first character to exclude from the returned substring.
let strA = 'The quick brown fox jumps over the lazy dog.';
console.log(strA.slice(31)); // => "the lazy dog."
console.log(strA.slice(4, 19)); // => "quick brown fox"

// 10. trim()
// removes whitespace from both ends of this string and returns a new string, without modifying the original string.
// To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
let word05 = '   ...123   ';
console.log(word05.trim()); // => ...123

// 11. repeat()
// syntaxt: repeat(count)
let text06 = 'icecream ';
let result06 = text06.repeat(2);
console.log(`I want ${result06}`); // => I want icecream icecream 
console.log((text06.repeat(3) + '\n').repeat(3)); // => 3x3


