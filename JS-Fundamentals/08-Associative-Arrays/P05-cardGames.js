function cardGames(input) {

    let playersNcards = {};
    let cardPower = { '2' : 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
        '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14,}
    let cardType = { 'S' : 4, 'H': 3, 'D': 2, 'C': 1 }

    for (let string of input) {
        let [name, cards] = string.split(': ');

        if (!name in playersNcards) {
            playersNcards[name] = new Set(cards.split(', '));
        }
        else {

        }

    }

    console.log(playersNcards)

    // let cardsPerPerson = Object.values(playersNcards);

    // for (card of cardsPerPerson) {
    //     uniqueCards.add(card);
    // }







}
cardGames([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ])