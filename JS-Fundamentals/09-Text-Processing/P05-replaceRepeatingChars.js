// function replaceRepeatingChars(str) {

//     //let pattern = /([A-Za-z0-9])\1+/g; //regex for finding repeating chars

//     let newStr = [];

//     for (let i = 0; i < str.length; i++) {

//         let currentChar = str[i];
//         let nextChar = str[i + 1];

//         if (currentChar !== nextChar) {
//             newStr.push(currentChar)
//         }

//     }

//     console.log(newStr.join(''))

// }
// replaceRepeatingChars('qqqwerqwecccwd');


function eliminateSameConsecutiveCharacters (input) {
    return input.replace(/(.)\1+/g,"$1");  // same as /([A-Za-z0-9])\1+/g
}

let test = 'qqqwerqwecccwd'
console.log(eliminateSameConsecutiveCharacters(test))

eliminateSameConsecutiveCharacters('qqqwerqwecccwd')






