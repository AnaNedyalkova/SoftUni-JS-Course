function uniquePINCodes(limitDigit1, limitDigit2, limitDigit3) {
    let x = 0;
    let y = 0;
    let z = 0;


    for (let digit1 = 1; digit1 <= limitDigit1; digit1++) {

        if (digit1 % 2 === 0) {
            x = digit1;
        } else {
            continue;
        }
        for (let digit2 = 1; digit2 <= limitDigit2; digit2++) {
            if (digit2 < 2 || digit2 > 7) {
                continue;
            }
            if (digit2 === 4 || digit2 === 6) {
                continue; 
            } else {
                y = digit2;
            }
            for (let digit3 = 1; digit3 <= limitDigit3; digit3++) {

                if (digit3 % 2 === 0) {
                    z = digit3;
                } else {
                    continue;
                }
                console.log(`${x} ${y} ${z}`);
            }
        }
    
    }
}
uniquePINCodes(8, 2, 8);                                         