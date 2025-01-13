function invalidNumber(x) {
    let num = Number(x);

    let isValid = num >= 100 && num <= 200 || num === 0;

    if (!isValid) {
        console.log("invalid");

    }

}
invalidNumber(75);
invalidNumber(0);
invalidNumber(150);
