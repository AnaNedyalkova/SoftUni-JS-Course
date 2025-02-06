function processOddNumbers (arr) {
let doubledArr = arr.map((el) => el * 2);
let filteredEl = doubledArr.filter((_, i) => i % 2 !== 0);  // _ слагаме, когато няма да ползваме първия елемент
console.log(filteredEl.reverse().join(' '));
}
processOddNumbers([10, 15, 20, 25]);

function smallestTwoNumbers(arr) {

    let newArr = [];
for (let i = 0; i < arr.length; i++){
    if (i % 2 !== 0) {
        newArr.push(arr[i]);
    }
}
let result = newArr.map(x => 2*x);
return result.reverse().join(' ');
}
console.log(smallestTwoNumbers([10, 15, 20, 25]));