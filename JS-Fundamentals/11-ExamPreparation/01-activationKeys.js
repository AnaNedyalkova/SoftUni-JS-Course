function activationKeys (arr) {
    let rawKey = arr.shift();
    let command = arr.shift();

    while (command !== 'Generate') {
        let tokens = command.split('>>>');
        let action = tokens[0];

        if (action === 'Contains') {
            let substring  = tokens[1];
            if (rawKey.includes(substring)) {
                console.log(`${rawKey} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }
            
        } else if (action === 'Flip') {
            let direction = tokens[1];
            let startIndex = Number(tokens[2]);
            let endIndex = Number(tokens[3]);
            let flippedPart = rawKey.substring(startIndex, endIndex);
            
            if (direction == 'Upper') {
                rawKey = rawKey.split(flippedPart).join(flippedPart.toUpperCase());  
                console.log(rawKey);

            } else if (direction == 'Lower') {
                rawKey = rawKey.split(flippedPart).join(flippedPart.toLowerCase());  
                console.log(rawKey);
            }
            

        } else if (action === 'Slice') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let substr = rawKey.slice(startIndex,endIndex);
            rawKey = rawKey.replace(substr, '');
            console.log(rawKey);
        }
        command = arr.shift();
    }
    console.log(`Your activation key is: ${rawKey}`);
    
}
activationKeys((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]));