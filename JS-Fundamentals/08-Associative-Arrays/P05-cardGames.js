function cardGames(input) {

    let playersNcards = {};
    let cardPowers = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
        '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14,
    };
    let cardTypes = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };

    for (let string of input) {
        let [name, cards] = string.split(': ');

        if (!(name in playersNcards)) {
            playersNcards[name] = new Set(cards.split(', '));
        }
        else {
            for (let card of cards.split(', ')) {
                playersNcards[name].add(card);
            }
        }
    }

    let resultMap = new Map();
    for (let player of Object.keys(playersNcards)) {
        resultMap[player] = 0;
        for (let card of playersNcards[player]) {
            for (let power of Object.keys(cardPowers)) {
                if (card.includes(power)) {
                    for (let type of Object.keys(cardTypes)) {
                        if (card.includes(type)) {
                            resultMap[player] += cardPowers[power] * cardTypes[type];
                        }
                    }
                }
            }
        }
    }
    
    let entries = Object.entries(resultMap);
   
    for (let el of entries){
        console.log(`${el[0]}: ${el[1]}`)
    }

}
cardGames([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);