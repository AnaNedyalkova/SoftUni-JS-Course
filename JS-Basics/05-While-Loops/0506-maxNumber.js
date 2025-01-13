function maxNumber(input) {
    let index = 0;
    let command = input[index];
    index++;
    
    // let maxNumber = Number.MIN_SAFE_INTEGER;  same as:
    let maxNumber  = Number(input[0]);  // same as above!

    while (command !== "Stop") {
        let currentNum = Number(command);

        if (maxNumber < currentNum) {
            maxNumber = currentNum;
        }

        command = input[index];
        index++;
    }

    console.log(maxNumber);
}
maxNumber(["10", "99", "80", "70", "Stop"]);
 maxNumber(["45", "-20", "7", "99", "Stop"]);
 maxNumber(["999", "Stop"]);