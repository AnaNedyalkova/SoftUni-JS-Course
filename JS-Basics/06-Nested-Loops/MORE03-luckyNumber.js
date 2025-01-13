function luckyNumber(n) {

    let result = '';

    for (let i = 1; i <= 9; i++) {

        for (let j = 1; j <= 9; j++) {

            if (n % (i + j) !== 0) {
                continue;
            }
            for (let k = 1; k <= 9; k++) {

                for (let l = 1; l <= 9; l++) {

                    if (i + j === k + l) {
                        result += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }
    console.log(result)
}

luckyNumber(3);

