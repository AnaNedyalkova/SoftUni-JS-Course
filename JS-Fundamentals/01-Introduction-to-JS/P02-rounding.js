function rounding (num, precision) {
    
    if (precision > 15) {
        precision = 15;
    }

    let result = num.toFixed(precision);
    console.log(parseFloat(result));   //PArseFloat -> Converts string into numbers and removed floating zeros
}
rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);