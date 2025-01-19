function sumDigits(num) {
    let numAsStr = num.toString(); //change to string because we want to iterate by digits
    let sum = 0;


    for (let digit of numAsStr) { /// we want to iteration without paying attention to index
        sum += Number(digit); //convert back to number
    }

    console.log(sum);

}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);
