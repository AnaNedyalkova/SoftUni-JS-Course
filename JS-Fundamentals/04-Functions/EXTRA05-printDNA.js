// sequesnce = ATCGTTAGGG;
function printDNA(dNALength) {

    let sequence = 'ATCGTTAGGG';
    let sequenceArr = sequence.split('')
    let counter = 0;

    for (let i = 1; i <= Number(dNALength); i++) {
        let elFirst = sequenceArr[0];
        let elSecond = sequenceArr[1];
        counter++;

        if (counter === 1) {
            console.log( `**${elFirst}${elSecond}**`);
        } else if (counter == 2 || counter === 4) {
            console.log(`*${elFirst}--${elSecond}*`);
        } else if (counter == 3) {
            console.log(`${elFirst}----${elSecond}`);
        }

        //reset counter every 4 iterations
        counter === 4 ? counter = 0 : null;

        //Change the array so we take the correct letters
        for (let letterIndex = 1; letterIndex <= 2; letterIndex++) {
            let moveLetter = sequenceArr.shift();
            sequenceArr.push(moveLetter);
        }
    }
}
printDNA(12);

//BAsic Pattern at every 4 iterations

// **AT**   1 has unique pattern
// *C--G*   2 and 4 have the same pattern
// T----T   3 has unique pattern
// *A--G*   2 and 4 have the same pattern

// **GG**
// *A--T*
// C----G
// *T--T*

// **AG**
// *G--G*
