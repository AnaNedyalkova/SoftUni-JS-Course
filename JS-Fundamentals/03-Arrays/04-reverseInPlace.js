function reverseInPlace(arr) {

    for (let i = 0; i < arr.length/2; i++) {  //we want to loop only half of the array
        let currentElement = arr[i];
        let lastElementIndex = arr.length - 1 - i;
        let lastElement = arr[lastElementIndex];
        
        
        arr[i] = lastElement;
        arr[lastElementIndex] = currentElement;
    }
    console.log(arr.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);