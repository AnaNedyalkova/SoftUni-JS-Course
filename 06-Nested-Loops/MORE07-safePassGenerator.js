function safePassGenerator(a, b, maxCountPasses) {

    let combinationsCount = 0;
    let result = '';
    let A = 35;
    let B = 64;

    for (let x = 1; x <= a; x++) {

        for (let y = 1; y <= b; y++) {

            result += (String.fromCharCode(A) + String.fromCharCode(B) + (x) + (y) + String.fromCharCode(B) + String.fromCharCode(A) + "|")
            A++;
            B++;

            if (A > 55) {
                A = 35;
            }
            if (B > 96) {
                B = 64;
            }

            combinationsCount++;
            
            if (combinationsCount === maxCountPasses) {
                console.log(result);
                return;
            }
        }
    }
    console.log(result);
}
safePassGenerator(20, 50, 10);