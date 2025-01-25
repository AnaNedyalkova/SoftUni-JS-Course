function evenAndOddSubtraction(arr) {

    // Parse each string from arr to Number
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    let sumOdd = 0;
    let sumEven = 0;

    // Check each element IF odd or even
    for (element of arr) {
        if(element % 2 === 0) {
            sumEven += element;
        } else {
            sumOdd += element;
        }
    }

    let difference = sumEven - sumOdd;
    console.log(difference);

}
evenAndOddSubtraction([2,4,6,8,10]);