function minNumber(input) {
    let index = 0;
    let command = input[index];
    
    //let isFound = false;

    let minNumber = Number.MAX_SAFE_INTEGER;
    //let minNumber  = Number(input[0]);

    while (command !== "Stop") {
        let currentNumber = Number(command);

        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }
        
        command = input[index];
        index++;
    }
    
    console.log(minNumber);
    
}
minNumber(["100", "99", "80", "70", "Stop"]);
minNumber(["-10", "20", "-30", "Stop"]);
minNumber(["45", "-20", "7", "99", "Stop"]);
minNumber(["999", "Stop"]);
minNumber(["-1", "-2", , "Stop"]);
