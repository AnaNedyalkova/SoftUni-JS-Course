function arrayManipulator(arr1, arr2) {

    //1. Create functions
    function add(arr, index, element) {  //adds element at the specified index
        arr.splice(index, 0, element);
    }
    function addMany(arr, index, elements) {  // adds set of elements at the specified index
        for (let elToAdd of elements) {
            arr.splice(index, 0, elToAdd)
            index++;
        }
    }
    function contains(arr, element) {  //print index of first occurent of the given element
        return arr.indexOf(element);
    }
    function removes(arr, index) {  //removes element at the specific index
        arr.splice(index, 1);
    }
    function shift(arr, rotations) { //shifts every element of the array the number of positions to the left
        for (let i = 0; i < rotations; i++) {
            arr.push(arr.shift());
        }
    }
    function sumPairs(arr) { //sums the elements in the array by pairs (first + second, third + fourth, …)
        let summedArr = [];

        for (let i = 0; i < arr.length; i += 2) {

            let firstNum = arr[i];

            if (i + 1 < arr.length) {
                let secondNum = arr[i + 1];
                summedArr.push(firstNum + secondNum);
            } else {
                summedArr.push(firstNum);
            }
        }
        return summedArr;

    }

    //2. GO through all the commands and execute
    arr1 = arr1.map(Number);
    let i = 0;

    while (arr2[i] !== 'print') {
        let tokens = arr2[i].split(' ');  // full command
        let command = tokens.shift();  // only text command

        if (command == 'add') {

            let index = Number(tokens.shift());
            let element = Number(tokens.shift());
            add(arr1, index, element);

        } else if (command == 'addMany') {

            let index = Number(tokens.shift());
            addMany(arr1, index, tokens.map(Number));

        } else if (command == 'contains') {

            let index = Number(tokens.shift());
            console.log(contains(arr1, index));

        } else if (command == 'remove') {
            let index = Number(tokens.shift());
            removes(arr1, index);

        } else if (command == 'shift') {
            let rotations = Number(tokens.shift());
            shift(arr1, rotations);

        } else if (command == 'sumPairs') {
            arr1 = sumPairs(arr1);
        }
        i++;
    }
    console.log(`[ ${arr1.join(', ')} ]`)

}

arrayManipulator([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"]);