function sumFirstandLastArrayElements (arr) {

    let firstNum = arr[0];
    let lastNum = arr[arr.length-1];  // take last element from an array
    let sum = firstNum + lastNum;

    console.log(sum);

}
sumFirstandLastArrayElements([20, 30, 40]);
sumFirstandLastArrayElements([10, 17, 22, 33]);
sumFirstandLastArrayElements([11, 58, 69]);