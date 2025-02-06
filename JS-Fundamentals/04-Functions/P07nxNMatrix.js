//OR num => ((num + ' ').repeat(num) + '\n').repeat(num);

function nxNMatrix (num) {

//console.log((`${num} `.repeat(num) + '\n').repeat(num));

let matrix = [];

for(let i = 0; i < num; i++){
    let symbol = '';
    for(let j = 0; j < num; j++){
        symbol += num + " ";
    }
    matrix.push(symbol)
}
console.log(matrix.join('\n'))


}
nxNMatrix(7);