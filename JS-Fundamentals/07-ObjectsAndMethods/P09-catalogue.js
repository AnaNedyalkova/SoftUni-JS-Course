function createCatalogue(arr) {
    let products = [];  // here we will store array with objects (pair of name and price)

    for (let pair of arr) {
        let [name, price] = pair.split(' : ');
        price = Number(price);

        products.push({ name: name, price: price });
    }

    let sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name)); //this is array

    // print as discionary with letters
    let currentLetter = '';

    for (let product of sortedProducts) { // product is object
        let firstLetter = product.name[0];

        if (firstLetter !== currentLetter) {   //check on  what letter are we
            currentLetter = firstLetter;
            console.log(currentLetter)
        }

        console.log(`  ${product.name}: ${product.price}`);
    }
}

createCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);