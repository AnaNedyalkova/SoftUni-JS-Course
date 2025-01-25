function maxNumber(arr) {
let topNums = [];

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let isTop = true; //first assume it is top, then test it

    for (let j = i + 1; j < arr.length; j++) {  //go right and check - pochavme ot index + 1 i vyrvim do kraq na masiva
        let numToRight = arr[j];
        
        if ( num <= numToRight) {
            isTop = false;
            break;
        }                                            // ako iskame ot lqvo - 

    }

    if(isTop) {
        topNums.push(num);
    }

}
console.log(topNums.join(' '));

}
maxNumber([14, 24, 3, 19, 15, 17]);