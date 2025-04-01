function solve02(arr) {
    let pattern = /(!)(?<command>[A-Z][a-z]{2,})(!):(\[)(?<string>[A-Za-z]{8,})(])/g;

    let n = Number(arr.shift());

    for (let i = 0; i < n; i++) {
        let match = pattern.exec(arr[i]);

        if (match) {
            let string = match.groups.string;
            let command = match.groups.command;
            let asciValues = [];

            for (let char of string) {
                let asciValue = char.charCodeAt();
                asciValues.push(asciValue);
            }
            console.log(`${command}: ${asciValues.join(' ')}`);


        } else {
            console.log(`The message is invalid`);

        }

    }
}
solve02((["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"]));