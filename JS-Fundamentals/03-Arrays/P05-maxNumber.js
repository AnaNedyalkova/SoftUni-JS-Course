function maxNumber(arr) {

    let topNums = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
       let isTop = true;

        for (let j = i + 1; j < arr.length; j++) {  //loop numbers on the right until we find a smaller higher number, then break;
            let numToRight = arr[j];

            if (num <= numToRight) {
              isTop = false;
                break;
            }  
        }

        if(isTop) { //if out of the internal loop then add the number to the new array
            topNums.push(num);
        }
    }
    console.log(topNums.join(" "));

}
maxNumber([14, 24, 3, 19, 15, 17]);