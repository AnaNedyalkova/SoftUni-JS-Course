function treasureHunt(arr) {

    let treasureChest = arr.shift().split('|');

    let index = 0;
    let command = arr[index];

    let isEmpty = false;

    while (command !== 'Yohoho!') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action == 'Loot') {
            for (let el of tokens) {
                if (!treasureChest.includes(el)) {
                    treasureChest.unshift(el);
                }
            }

        } else if (action == 'Drop') {
            let indexEl = Number(tokens[0]);
            if (indexEl < 0 || indexEl > treasureChest.length) {
                index++;
                command = arr[index];
                continue;
            }
            let removedEl = treasureChest.splice(indexEl, 1).join('');
            treasureChest.push(removedEl);

        } else if (action == 'Steal') {
            let stolenCount = Number(tokens[0]);
            let stolenItems = treasureChest.splice(-stolenCount); // тук имах грешка, ако искаме да махаме от края, просто слагаме отрицателната стойност на броя числа

            console.log(stolenItems.join(', '))

        }

        if (treasureChest.length <= 0) {
            isEmpty = true;
            console.log(`Failed treasure hunt.`);
            break;
        }

        index++;
        command = arr[index];

    }


    let sum = 0;
    let count = 0;
    for (let el of treasureChest) {
        sum += el.length;
        count++;

    }
    let average = sum / count;
    if (!isEmpty) {
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    }

}
treasureHunt((["Diamonds|Silver|Shotgun|Gold",

    "Loot Silver Medals Coal",

    "Drop -1",

    "Drop 1",

    "Steal 6",

    "Yohoho!"]))
treasureHunt((["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"]))