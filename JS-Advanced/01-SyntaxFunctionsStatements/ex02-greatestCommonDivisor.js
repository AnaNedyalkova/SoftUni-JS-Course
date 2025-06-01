function greatestCommonDivisor(n1, n2) {
    let gcd = n1 % n2;
    
    while (gcd !== 0) {
        n1 = n2;
        n2 = gcd;
        gcd = n1 % n2;
    }

    console.log(n2);
}
greatestCommonDivisor(2154, 458);