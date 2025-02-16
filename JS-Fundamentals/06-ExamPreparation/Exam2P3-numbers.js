function numbers(input) {

    let arr = input.split(' ').map(Number);

    let newArr = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let average = sum / arr.length;

    let sortedArr = arr.sort((a, b) => b - a).slice(0, 5);

    for (el of sortedArr) {

        if (el > average) {
            newArr.push(el);
        }
    }

    if (newArr.every(x => x < average)) {
        console.log('No')
    }

    newArr = newArr.sort((a, b) => b - a);
    console.log(newArr.join(' '))
}



numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
//numbers('1');
//numbers('-1 -2 -3 -4 -5 -6')
//numbers('10 20 30 40 50')