function arrayModifier(arr) {
    let modifiedArray = arr.shift().split(' ').map(Number);

    let command = arr.shift();


    while (command !== 'end') {
        let tokens = command.split(' ');
        let action = tokens[0];

        if (action == 'swap') {
            let index1 = tokens[1];
            let index2 = tokens[2];
            [modifiedArray[index1], modifiedArray[index2]] = [modifiedArray[index2], modifiedArray[index1]];

        } else if (action == 'multiply') {
            let index1 = Number(tokens[1]);
            let index2 = Number(tokens[2]);
            let multipliedEl = modifiedArray[index1] * modifiedArray[index2];
            modifiedArray.splice(index1, 1, multipliedEl);

        } else if (action == 'decrease') {
            for (let i = 0; i < modifiedArray.length; i++) {   //alternative with map -> modifiedArray = modifiedArray.map(el => el - 1);
                modifiedArray[i] -= 1
            }
        }
        
        command = arr.shift();
    }

    console.log(modifiedArray.join(', '))

}
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);