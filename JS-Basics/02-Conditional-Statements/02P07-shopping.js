function shopping(budget, videocardsCount, processorsCount, ramCount) { let pricePerVideocard = 250;
    let videoCardsPrice = videocardsCount * pricePerVideocard;
    let processorToVideocardPriceRation = 0.35;
    let processorPrice = videoCardsPrice * processorToVideocardPriceRation;
    let processorsTotal = processorPrice * processorsCount;
    let ramToVideocardPriceRatio = 0.10;
    let ramPrice = videoCardsPrice * ramToVideocardPriceRatio;
    let ramTotal = ramCount * ramPrice;

    let shoppingTotal = ramTotal + processorsTotal + videoCardsPrice;


    if (videocardsCount > processorsCount) {
        shoppingTotal -= shoppingTotal * 0.15;    
    } 

    let diff = Math.abs(budget - shoppingTotal);

    if (shoppingTotal <= budget) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
}
shopping(900, 2, 1, 3);
shopping(920.45, 3, 1, 1);
shopping(920.45, 2, 3, 1);