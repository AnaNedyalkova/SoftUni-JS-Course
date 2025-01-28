function mergeArrays(arr1, arr2) {

    let newArr = [];

    for(let i = 0; i < arr1.length; i++){
        let element1 = arr1[i];
        let element2 = arr2[i];

        if(i % 2 === 0) {
            newArr.push(Number(element1) + Number(element2));
        } else {
            newArr.push(element1 + element2);
        }
    }
    console.log(newArr.join(" - "))
}


mergeArrays(
    ['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);