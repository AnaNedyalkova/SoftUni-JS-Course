function bitcoinMining(input) {

    let totalMoneyNew  = 0;
    let firstBitcoinDay = 0;
    let bitcoinBoughtsCount = 0;
    let currentDay = 1;

    for (let goldQty of input) {

        if (currentDay % 3 === 0) {
            goldQty *= 0.7; // stealing gold
        }

        let moneyWon = goldQty * 67.51;
        totalMoneyNew += moneyWon;
        
        while (totalMoneyNew >= 11949.16) {  //important fix
            bitcoinBoughtsCount++;
            totalMoneyNew -= 11949.16;

            if (bitcoinBoughtsCount === 1) {
                firstBitcoinDay = currentDay;
            }
        }

        currentDay++;
    }

    console.log(`Bought bitcoins: ${bitcoinBoughtsCount}`);
    
    if (bitcoinBoughtsCount > 0 ) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`)
    }

    console.log(`Left money: ${totalMoneyNew.toFixed(2)} lv.`)

}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);

