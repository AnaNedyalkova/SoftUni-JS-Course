function sorting(arr) {

    sortedArr = arr.sort((a,b) => a - b);
    
    newArr = [];

    while (sortedArr.length > 0) {

        let maxNum = sortedArr.pop();
        let minNum = sortedArr.shift();
        newArr.push(maxNum);
        newArr.push(minNum);
    }

    console.log(newArr.join(' '));

}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);