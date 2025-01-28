function reverseArrayOfNumbers(n, arr) {

    let newArr = [];

    for(let i = 0; i < n; i++){  //creates new arr till n 
        newArr.push(arr[i]);  //populate the values in the array
    }

    //let result = "";  //can be an array as well --> see resultV2
    let resultV2 = [];

    for (let i = newArr.length -1; i >= 0; i--){  //loop from the end; need to reverse the arr
       //result += `${newArr[i]} `;
        resultV2.push(newArr[i]);
    }
    //console.log(result)
    console.log(resultV2.join(" "))


}
reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);