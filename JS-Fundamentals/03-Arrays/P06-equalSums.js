function equalSums(arr) {

    for (let i = 0; i < arr.length; i++) {
        let sumToLeft = 0;
        let sumToRight = 0;

        for (let j = 0; j < i; j++) {  //LEFT 
            sumToLeft += arr[j];
        }

        for(let k = i + 1; k < arr.length; k++) { //RIGHT
            sumToRight += arr[k];
        }

        if(sumToLeft === sumToRight) {
            console.log(i);
            return;
        } 
    }

    console.log('no');
}
equalSums([1]);