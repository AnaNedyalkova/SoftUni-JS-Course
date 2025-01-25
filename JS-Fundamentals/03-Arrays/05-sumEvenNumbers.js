function sumEvenNumbers(arr) {

    let sum = 0;

    // Go through the arr and parse each element to Number
    for(let i = 0; i < arr.length; i++){
       arr[i] = Number(arr[i]);
    }

    // Compare if element is even ans add to the sum
    for (element of arr) {

        if(element % 2 == 0) {
            sum += element; 

        }
    }
    
    console.log(sum);
}
//sumEvenNumbers(['1','2','3','4','5','6']);
//sumEvenNumbers(['3','5','7','9']);
sumEvenNumbers(['2','4','6','8','10']);