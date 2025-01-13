function substitute(k, L, m, n) {

    let counter = 0;

    for (let n1s1 = k; n1s1 <= 8; n1s1++) {
        for (let n1s2 = 9; n1s2 >= L; n1s2--) {
            for (let n2s1 = m; n2s1 <= 8; n2s1++) {
                for (let n2s2 = 9; n2s2 >= n; n2s2--) {

                    if (n1s1 % 2 === 0 && n2s1 % 2 === 0 && n1s2 % 2 !== 0 && n2s2 % 2 !== 0) {

                        if (n1s1 === n2s1 && n1s2 === n2s2) {
                            console.log(`Cannot change the same player.`)
                        } else {
                            console.log(`${n1s1}${n1s2} - ${n2s1}${n2s2}`);
                            counter++;
                        }
                    }
                    if (counter >= 6) {
                        return;
                    }
                }
            }
        }
    }

}
//substitute(7, 6, 8, 5);
substitute(6, 7, 5, 6)