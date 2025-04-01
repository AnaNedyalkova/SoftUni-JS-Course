function solve01 (arr) {
    let str = arr.shift();

    let command = arr.shift();

    while (command !== 'End') {

        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action == 'Translate') {
            let char = tokens[0];
            let replacement = tokens[1];
            str = str.split(char).join(replacement);
            console.log(str);
        } else if (action == 'Includes') {
            let substring = tokens[0];
            if (str.includes(substring)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (action == 'Start') {
            let substring = tokens[0];
            if (str.startsWith(substring)) {
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (action == 'Lowercase') {
            str = str.toLowerCase();
            console.log(str);
            
        } else if (action == 'FindIndex') {
            let char = tokens[0];
            let lastIndex = str.lastIndexOf(char);
            console.log(lastIndex);
            
        } else if (action == 'Remove') {
            let startIndex = Number(tokens[0]);
            let count = Number(tokens[1]);

            let partToRemove = str.slice(startIndex, startIndex + count);
            str = str.replace(partToRemove, '');
            
            console.log(str);
            
        }

        command = arr.shift();
    }

}
solve01(["*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"]);