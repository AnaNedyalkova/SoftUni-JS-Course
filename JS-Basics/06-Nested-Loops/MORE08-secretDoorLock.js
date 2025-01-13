function secretDoorLock(n1, n2, n3) {
    function isPrime (n) {

        for ( let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false; 
            }
        }
        return true;
    }

    for (let i = 1; i <= n1; i++) {
        if (i % 2 !== 0) {
            continue;
        }
        for (let j = 2; j <= n2; j++) {
            
            if (!isPrime(j)) {
                continue;
            }

            for (let k = 1; k <= n3; k++) {
                if (k % 2 !== 0) {
                    continue;
                }
                console.log(`${i} ${j} ${k}`);
            }

        }
    }
}
secretDoorLock(8, 2, 8);
