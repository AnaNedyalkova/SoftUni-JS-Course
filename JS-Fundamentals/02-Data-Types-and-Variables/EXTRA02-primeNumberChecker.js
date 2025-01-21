function primeNumChecker(num) {

    isPrime = true;

    if (num < 3) {  // exclude 1,2,3
        isPrime = true;
    }
    for (let i = 3; i < num; i++) {

        if (num % i === 0) {
            isPrime = false;
        }  
    } 
        console.log(isPrime);

}
primeNumChecker(7);
primeNumChecker(8);
primeNumChecker(81);