function barcodeGenerator(arg1, arg2) {
    let start = Number(arg1);
    let end = Number(arg2);

    let startAsString = String(start); //string 2345
    let endAsString = String(end);

    let startA = Number(startAsString[0]); // vzimame elementi ot string i pak gi pravim chisla
    let startB = Number(startAsString[1]);
    let startC = Number(startAsString[2]);
    let startD = Number(startAsString[3]);

    let endA = Number(endAsString[0]);
    let endB = Number(endAsString[1]);
    let endC = Number(endAsString[2]);
    let endD = Number(endAsString[3]);

    let buffer = "";

    for (let a = startA; a <= endA; a++) {
        for (let b = startB; b <= endB; b++) {
            for (let c = startC; c <= endC; c++) {
                for (let d = startD; d <= endD; d++) {
                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) { 
                        buffer += `${a}${b}${c}${d} `;
                    }
                }
            }
        }
    }
    console.log(buffer);
}


barcodeGenerator(2345, 6789);