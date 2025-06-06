function findFurniture (arr) {
let pattern  = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+(\.\d+)?)!(?<qty>\d+)/;

let totalPrice = 0;
let command = arr.shift();
console.log(`Bought furniture:`)

while(command !== 'Purchase') {
    let match = pattern.exec(command);

    if (match) {
        let name = match.groups.name;
        let price = Number(match.groups.price);
        let qty = Number(match.groups.qty);
        let totalFurniturePrice = price*qty;
        totalPrice += totalFurniturePrice;
        console.log(name);

    }
    command = arr.shift();
}

console.log(`Total money spend: ${totalPrice.toFixed(2)}`)

}
findFurniture(
    ['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);