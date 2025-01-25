function maxSequenceOfEqualElements(arr) {
    let longestSeq = [];
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let currentSeq = [num];

        for (let k = i + 1; k < arr.length; k++) {
            let numToRight = arr[k];
            
            if (numToRight === num) {
                currentSeq.push(numToRight);
            } else {
                break;
            }
        }

        if (currentSeq.length > longestSeq.length) {
            longestSeq = currentSeq;
            
        }

    }
    console.log(longestSeq.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);