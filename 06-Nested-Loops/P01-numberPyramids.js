function numberPyramids(n) {
    
    let result = '';
    let number = 0;

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            number++;

            result += number + ' ';

            if (number  === n) {
                console.log(result);
                return;
            }
        }
        result += '\n';
    }
}
numberPyramids(15);
