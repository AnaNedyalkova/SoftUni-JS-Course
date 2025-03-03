function partyTime(arr) {
    let guestsVIPSet = [];
    let guestsRegSet = [];

    let command = arr.shift();
    while (command !== 'PARTY') {

        if (/^\d/.test(command)) {
            guestsVIPSet.push(command);
        } else {
            guestsRegSet.push(command);
        }

        command = arr.shift()
    }

    let allGuests = guestsVIPSet.concat(guestsRegSet);

    for (let guest of arr) {
        allGuests.splice(allGuests.indexOf(guest), 1)
    }

    console.log(allGuests.length);
    allGuests.forEach(guest => { console.log(guest) });
}

partyTime(
    ['m8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'xys2FYzn',
        'MDzcM9ZK',
        'PARTY',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'm8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ'
    ]);