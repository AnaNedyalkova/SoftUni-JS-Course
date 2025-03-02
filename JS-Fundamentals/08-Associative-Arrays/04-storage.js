function storage(arr) {
    let storageMap = new Map();

    for (let string of arr) {
        let tokens = string.split(' ');
        let product = tokens.shift();
        let quantity = Number(tokens.shift());

        if (!storageMap.has(product)) {
            storageMap.set(product, quantity);
        } else {
            let currentQty = storageMap.get(product);  //will return the quantity of the product
            let newQty = currentQty + quantity;
            storageMap.set(product, newQty);
        }
    }


    for (let [item, quantity] of storageMap) {
        console.log(`${item} -> ${quantity}`)
    }

}
storage(
    ['apple 50',
        'apple 61',
        'coffee 115',
        'coffee 40'])