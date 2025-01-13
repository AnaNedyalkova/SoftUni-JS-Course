function weddingSeats(arg1, arg2, arg3) {

    let lastSector = arg1.charCodeAt();
    let rows = arg2;
    let seatsCountOddRow = arg3;

    let seatsCountEvenRow = seatsCountOddRow + 2;

    let result = '';
    let counter = 0;
    

    for (let i = 'A'.charCodeAt(); i <= lastSector; i++) {
        for (let j = 1; j <= rows; j++) {
            let seatCount = seatsCountOddRow;
            if (j % 2 === 0) {
                seatCount += 2;
            }
            for (let k = 'a'.charCodeAt(); k <= 'a'.charCodeAt() + seatCount - 1; k++) {
    
                counter++;
                console.log(`${String.fromCharCode(i)}${j}${String.fromCharCode(k)}`);
            }
        }
        rows++;
    }
console.log(counter);
}
weddingSeats('C', 4, 2);