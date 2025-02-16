function numbers(arr) {
    let numbers = arr.shift().split(' ').map(Number);
    let command = arr.shift();

    while (command !== 'Finish') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action == 'Add') {
            let value = Number(tokens[0]);
            numbers.push(value);


        } 
        
        else if (action == 'Remove') {
            let value = Number(tokens[0]);
            let indexValue = numbers.indexOf(value);
            numbers.splice(indexValue, 1)

        }
        
        else if (action == 'Replace') {
            let value = Number(tokens[0]);
            let replacement = Number(tokens[1]);

            if (numbers.includes(value)) {
                let indexValue = numbers.indexOf(value);
                numbers.splice(indexValue,1,replacement);
            }
        } 
        
        else if (action == 'Collapse') {
            let value = Number(tokens[0]);
            let valuesToRemove = numbers.filter(x => x >= value);
            numbers = valuesToRemove;
            
        }

        command = arr.shift();
    }

    console.log(numbers.join(' '))

}
numbers(
    ["1 4 5 19",
        "Add 1",
        "Remove 4",
        "Finish"]);
numbers(
    ["1 20 -1 10",
        "Collapse 8",
        "Finish"]);
numbers(
    ["5 9 70 -56 9 9",
        "Replace 9 10",
        "Remove 9",
        "Finish"]);