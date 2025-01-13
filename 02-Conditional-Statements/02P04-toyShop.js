// TODO:
// 1. Caluclate items prices (each) x
// 2. Calculate items total price x
// 3. Calculate items count x
// 4. Calculate discount (if needed) x
// 5. Pay rent x
// 6. Print
// 6.1. Money enough
// 6.2. Money NOT enough

function toyShop(vacationPrice, puzzlesCount, dollsCount, stuffedBearsCount, minionsCount, trucksCount) {

let puzzlePrice = 2.60;
let dollPrice = 3;
let bearPrice = 4.10;
let minionPrice = 8.20;
let truckPrice = 2;

let puzzlesPrice = puzzlesCount * puzzlePrice;
let dollsPrice = dollsCount * dollPrice;
let bearsPrice = stuffedBearsCount * bearPrice;
let minionsPrice = minionsCount * minionPrice;
let trucksPrice = trucksCount * truckPrice;

let totalPrice = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;
let toysCount = puzzlesCount + dollsCount + stuffedBearsCount + trucksCount + minionsCount;

if (toysCount >= 50) {
    totalPrice -= totalPrice * 0.25;
    }

totalPrice -= totalPrice * 0.10;

if (totalPrice >= vacationPrice) {
    let moneyLeft = totalPrice - vacationPrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = vacationPrice - totalPrice;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }
}

toyShop(40.8,20,25,30,50,10);
toyShop(320,8,2,5,5,1);

