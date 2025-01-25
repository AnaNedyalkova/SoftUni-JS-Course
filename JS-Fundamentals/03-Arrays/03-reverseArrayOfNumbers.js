function reverseArrayOfNumbers(n, arr) {

    let result = [];
    let reverseArr = [];

    for (let i = 0; i < n; i++) {
        result.push(arr[i]);
    }

    for (let i = result.length - 1; i >= 0; i--) {  //reverse it with another for loop
        reverseArr.push(result[i]);
    }

    console.log(reverseArr.join(" "));
}
reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);