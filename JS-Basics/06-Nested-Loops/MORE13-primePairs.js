function primePairs (startFirstPair, startSecondPair, diffFirstPair, diffSecondPair) {
    
    function isPrime (n) {

        for ( let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false; 
            }
        }
        return true;
    }

    let endFirstPair = startFirstPair + diffFirstPair;
    let endSecondPair = startSecondPair + diffSecondPair;
  

    for (let x = startFirstPair; x <= endFirstPair; x++) {
        for (let y = startSecondPair; y <= endSecondPair; y++) {
            if (isPrime(x) && isPrime(y)) {
                
                console.log(`${x}${y}`);
            }
        }
    }
}
primePairs (10, 20, 5,5);
primePairs (10, 30, 9,6);
