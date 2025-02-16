function deckOfCards(arr) {
    let listOfCards = arr.shift().split(', ');
    let n = Number(arr.shift());

    for (let currentCommand = 0; currentCommand < n; currentCommand++) {
        let tokens = arr.shift().split(', ');
        let action = tokens.shift();

        if (action == 'Add') {
            let card = tokens[0];

            if (!listOfCards.includes(card)) {
                listOfCards.push(card);
                console.log(`Card successfully added`);
            } else {
                console.log(`Card is already in the deck`);
            }
        }

        else if (action == 'Remove') {
            let card = tokens[0];
            let indexCard = listOfCards.indexOf(card);

            if (listOfCards.includes(card)) {
                listOfCards.splice(indexCard, 1);
                console.log(`Card successfully removed`);
            } else {
                console.log(`Card not found`);
            }

        }
        else if (action == 'Remove At') {
            let index = Number(tokens[0]);

            if (index < 0 || index > listOfCards.length) {
                console.log('Index out of range');
            } else {
                listOfCards.splice(index, 1)
                console.log(`Card successfully removed`)
            }

        }
        else if (action == 'Insert') {
            let index = Number(tokens[0]);
            let card = tokens[1];

            if (index < 0 || index > listOfCards.length) {
                console.log('Index out of range');
            } else {
                if (!listOfCards.includes(card)) {
                    listOfCards.splice(index, 0, card);
                    console.log(`Card successfully added`)
                } else {
                    console.log(`Card is already added`)
                }
            }
        }

        
    }
    console.log(listOfCards.join(', '));
}
    deckOfCards(
        ["Jack of Spades, Ace of Clubs, Jack of Clubs",
            "2",
            "Insert, -1, Queen of Spades",
            "Remove At, 1"]);