function negativePositiveNumbers (data) {
    let newArr = [];

    for (let num of data) {
        if (num < 0 ) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }

    for (let el of newArr) {
        console.log(el);
        
    }

}
negativePositiveNumbers([7, -2, 8, 9])