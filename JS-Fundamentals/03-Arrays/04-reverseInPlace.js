function reverseInPlace(arr) {

    // for (let i = 0; i < arr.length/2; i++) {  //we want to loop only half of the array
    //     let currentElement = arr[i];
    //     let lastElementIndex = arr.length - 1 - i;
    //     let lastElement = arr[lastElementIndex];
        
        
    //     arr[i] = lastElement;
    //     arr[lastElementIndex] = currentElement;
    // }
    // console.log(arr.join(' '));


    for (let i = 0; i <= arr.length/2; i++) {
        let currentElement = arr[i]; 
        let lastElementIndex = arr.length - 1 - i;  // 5 - 1 - 0 /next 1/next 2/next 3/next 4
        let lastElement = arr[lastElementIndex];    // take last Element using the index created above
        
        // THE SWAPPING PLACES MECHANISM
        arr[i] = lastElement; // giving the currentElement the value of last Element
        arr[lastElementIndex] = currentElement;  // give the lastElemnt the value of Current Element
   
    }
    console.log(arr.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);