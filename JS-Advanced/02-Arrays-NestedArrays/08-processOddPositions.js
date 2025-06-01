function processOddPositions(arr) {

    let filtered = arr.filter((e, i) => i % 2);
    let doubled = filtered.map(e => e*2);
    let reversed = doubled.reverse();
    let result = reversed.join(' ')
    
    return result; 


}
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));
