function binaryToDecimal (n, digit) {
counter = 0;

while (n > 0) {
    let leftover = n % 2; //vzimame ostatyka

    if (leftover === digit) {
        counter++;
    }

    n = Math.floor(n / 2);
}

console.log(counter);

}
binaryToDecimal(20,0); 