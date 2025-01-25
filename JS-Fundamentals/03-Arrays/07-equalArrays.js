function equalArrays(arr1, arr2) {

    let sum = 0;
    let differenceIndex = '';
    let numArr1 = 0;
    let numArr2 = 0;

    for (let i = 0; i < arr1.length; i++) {
        numArr1 = Number(arr1[i]);
        numArr2 = Number(arr2[i]);

        if (numArr1 === numArr2) {
            sum += numArr1;
        } else {
            differenceIndex = i;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrays(['1'], ['10']);