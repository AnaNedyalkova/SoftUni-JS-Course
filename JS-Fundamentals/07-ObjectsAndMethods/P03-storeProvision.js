function storeProvision(stock, ordered) {
    let storeObj = {};

    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let qty = Number(stock[i + 1]);
        storeObj[product] = qty;
    }

    for (let j = 0; j < ordered.length; j += 2) {
        let product = ordered[j];
        let qty = Number(ordered[j + 1]);

        if (product in storeObj) {
            storeObj[product] += qty;
        } else {
            storeObj[product] = qty;
        }
    }

    for (let el of Object.entries(storeObj)) {
        console.log(`${el[0]} -> ${el[1]}`)
    }
}
storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])