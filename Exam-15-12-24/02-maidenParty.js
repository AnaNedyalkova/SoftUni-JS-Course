function maidenParty(partyPrice, loveMsgCount, rosesCount, keychainsCount, caricatCount, lucksCount) {

    let loveMsgPrice = 0.60;
    let rosePrice = 7.20;
    let keychainPrice = 3.60;
    let caricaturePrice = 18.20;
    let luckPrice = 22;

    let sum = loveMsgCount * loveMsgPrice + rosesCount * rosePrice + keychainsCount * keychainPrice + caricatCount * caricaturePrice + luckPrice * lucksCount;
    totalThingsCount = loveMsgCount + rosesCount + keychainsCount + caricatCount + lucksCount;

    if (totalThingsCount >= 25) {
        sum -= sum * 35 / 100;
    }

    sum -= sum * 10 / 100;

    let diff = Math.abs(sum - partyPrice);

    if (sum >= partyPrice) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else {

        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }



}
maidenParty(40.8, 20, 25, 30, 50, 10);
maidenParty(320, 8, 2, 5, 5, 1);