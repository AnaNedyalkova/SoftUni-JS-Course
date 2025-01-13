function combinationsOfLetters(a,b,c) {

    let letterFirst = a.charCodeAt();
    let letterLast = b.charCodeAt();
    let letterMissed = c.charCodeAt();
    let count = 0;
    let result = '';

    for (let i = letterFirst; i <= letterLast; i++) {
        if (i === letterMissed) {
            continue;
        }

        for (let j = letterFirst; j <= letterLast; j++) {
            if (j === letterMissed) {
                continue;
            }

            for (let k = letterFirst; k <= letterLast; k++) {

                if (k === letterMissed) {
                    continue;
                }
                count++;
                result += String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + " ";

            }

        }
    }

    result += count;
    console.log(result);
}

combinationsOfLetters ('a', 'c', 'b');
//combinationsOfLetters([f, k, h]);