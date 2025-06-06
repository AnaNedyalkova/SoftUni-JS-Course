function rotateArray(data, num) {

    for (let i = 0; i < num; i++) {
        data.unshift(data.pop())  //взима отзад и го слага отпред
    }

    console.log(data.join(' '));
    
}
rotateArray(
    ['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15)
rotateArray(
    ['1',
        '2',
        '3',
        '4'],
    2)
