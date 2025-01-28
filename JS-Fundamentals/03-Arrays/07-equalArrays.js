function equalArrays(arr1, arr2) {

    // let sum = 0;
    // let differenceIndex = '';
    // let numArr1 = 0;
    // let numArr2 = 0;

    // for (let i = 0; i < arr1.length; i++) {
    //     numArr1 = Number(arr1[i]);
    //     numArr2 = Number(arr2[i]);

    //     if (numArr1 === numArr2) {
    //         sum += numArr1;
    //     } else {
    //         differenceIndex = i;
    //         console.log(`Arrays are not identical. Found difference at ${i} index`);
    //         return;
    //     }
    // }
    // console.log(`Arrays are identical. Sum: ${sum}`);

    let sum = 0;
    for(let i = 0; i < arr1.length; i++) {
        let num1 = Number(arr1[i]);
        let num2 = Number(arr2[i]);
        let differenceIndex = 0;

        if(num1 === num2) {
            sum += num1;
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`)

}
equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);