function signCheck(numOne, numTwo, numThree) {
    let numberArr = [numOne, numTwo, numThree];
    let isPositive = true;

    for (let num of numberArr) {
        if(num === 0) {
            isPositive = true;
            break;
        }
        if(num < 0) {
           isPositive = !isPositive;  // chanage it everytime a negative num is received                                  
        }

    }
    if (isPositive) {
        return "Positive";
    } else {
        return 'Negative';
    }


}
console.log(signCheck(-5,

    1,
    
    1));