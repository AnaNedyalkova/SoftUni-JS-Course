function arrayManipulation(commands) {

    let arr = commands.shift().split(' ').map(Number); //make first element an Array
    //console.log(arr)

    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');  //deconstruct the commands array into elements 

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {   // read command and execute
            case 'Add' :
                arr.push(firstNum);
                break;
            case 'Remove':
                arr = arr.filter(x => x !== firstNum);
                break;
            case 'RemoveAt':
                arr.splice(firstNum, 1);
                break;
            case 'Insert':
                arr.splice(secondNum, 0, firstNum);
                break;
        }
    }

    console.log(arr.join(' '))

}
arrayManipulation(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'] )