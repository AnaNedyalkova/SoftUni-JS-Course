function addAndRemoveEl(arr) {

    let num = 1;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        if (command === 'add') {
            result.push(num);
        } else if (command === 'remove') {
            result.pop();
        }

        num++;
    }

    if (result.length < 1) {
        console.log('Empty');
        
    }

    for (let el of result) {
        console.log(el);
        
    }
}
addAndRemoveEl(['add', 
    'add', 
    'add', 
    'add'])
