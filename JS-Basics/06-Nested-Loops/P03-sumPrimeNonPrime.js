function sumPrimeNonPrime(input) {
    // TODO:
    // 1. Create helpet variables
    // 1.1. Index
    // 1.2. Sums
    // 2. While loop
    // 2.1. Update index
    // 2.2. Create helper variable (flag for is prime)
    // 2.3. For loop (handle prime)
    // 2.4. Handle prime/non prime
    // 3. Print results
    let index = 0;
    let command = input[index];
    let primeSum = 0;
    let nonPrimeSum = 0;                                                                            

    while (command !== 'stop') {
        let number = Number(command);

        if (number < 0) {
            console.log(`Number is negative.`);
            
            index++;
            command = input[index];

            continue;
        }

        let isPrime = true;

        for (let divider = 2; divider < number; divider++) {
            if (number % divider === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeSum += number;
        } else {
            nonPrimeSum += number;
        }

        index++;
        command = input[index];

    }
    console.log (`Sum of all prime numbers is: ${primeSum}`);
    console.log (`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
sumPrimeNonPrime(["0", "-9", "0", "stop"]);