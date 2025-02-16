function memoryGame(arr){
let seq = arr.shift().split(' ');
let currentMove = 1;

let command = arr.shift();

while ( command !== 'end') {
    let tokens = command.split(' ');
    let index1 = Number(tokens.shift());
    let index2 = Number(tokens.shift());

    if (index1 == index2 || 
        (index1 < 0 || index1 >= seq.length) ||
        (index2 < 0 || index2 >= seq.length) 
    ) {
        let newEl = `-${currentMove}a`;
        let middleIndex = Math.floor(seq.length / 2);

        seq.splice(middleIndex, 0, newEl, newEl)
        console.log('Invalid input! Adding additional elements to the board')
    } else {
        if (seq[index1] === seq[index2]) {
            console.log(`Congrats! You have found matching elements - ${seq[index1]}!`)

            let minIndex = Math.min(index1, index2);
            let maxIndex = Math.max(index1, index2);

            seq.splice(maxIndex,1);
            seq.splice(minIndex,1);
        } else {
            console.log(`Try again!`)
        }
    }

    if(seq.length === 0){
        console.log(`You have won in ${currentMove} turns!`)
        return;
    }

    currentMove++;
    command = arr.shift();
}

console.log(`Sorry you lose :(`)
console.log(`${seq.join(' ')}`)
}
memoryGame([

    "a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end" ]);