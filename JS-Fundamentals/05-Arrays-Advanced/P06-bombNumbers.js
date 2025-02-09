function bombNumbers(initialSeq, arr2) {

    let sum = 0;
    let bomb = arr2.shift();
    let power = arr2.shift();
    
    while (initialSeq.includes(bomb)) {
        
        let index = initialSeq.indexOf(bomb);
        let detonationRange = power * 2 + 1;
        let startIndex = index - power;

        if(startIndex < 0){
            initialSeq.splice(0, detonationRange);
        } else {
            initialSeq.splice(startIndex, detonationRange);
        }
    }

    for(el of initialSeq) {
        sum += el;
    }
    console.log(sum)
}
bombNumbers(
    [1, 7, 7, 1, 2, 3],
    [7, 1]
);