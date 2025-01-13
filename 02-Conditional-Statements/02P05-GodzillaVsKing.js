// TODO
// 1. Calculate decor price  x
// 2. Calculate clothes price x
// 3. Handle discount x
// 4. Calculate expenses 
// 5. Print 
 // 5.1. Not enough money
 // 5.2. Action

function godzillaVsKong(budget, extrasCount, clothesPrice) {
let decorPrice = budget * 0.10;
let clothesTotalPrice = extrasCount * clothesPrice;

if (extrasCount > 150) {
clothesTotalPrice -= clothesTotalPrice * 0.10;
    }

    let expences = decorPrice + clothesTotalPrice;
    diff = Math.abs(budget - expences);

    if (budget < expences) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }

}
godzillaVsKong (20000,120,55.5);
godzillaVsKong (15437.62,186,57.99);
godzillaVsKong (9587.88,222,55.68);