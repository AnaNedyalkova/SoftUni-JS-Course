// TODO:
// 1. Calculate flowers Price
// 2. Handle price change
// 2.1. discount
// 2.2. increase price
// 3. Print results
// 3.1. Budget is enough
// 3.2. Budget is NOT enough
function newHouse(flowersType, flowersCount, budget) {
    let flowersPrice = 0;

    switch (flowersType) {
        case 'Roses':
            flowersPrice = flowersCount * 5;
            break;
        case 'Dahlias':
            flowersPrice = flowersCount * 3.80;
            break;
        case 'Tulips':
            flowersPrice = flowersCount * 2.80;
            break;
        case 'Narcissus':
            flowersPrice = flowersCount * 3.00;
            break;
        case 'Gladiolus':
            flowersPrice = flowersCount * 2.50;
            break;
    }

    if (flowersType == 'Roses' && flowersCount > 80) {
        flowersPrice -= flowersPrice * 0.10;
    } else if (flowersType == 'Dahlias' && flowersCount > 90) {
        flowersPrice -= flowersPrice * 0.15;
    } else if (flowersType == 'Tulips' && flowersCount > 80) {
        flowersPrice -= flowersPrice * 0.15;
    } else if (flowersType == 'Narcissus' && flowersCount < 120) {
        flowersPrice += flowersCount * 0.15;
    } else if (flowersType == 'Gladiolus' && flowersCount < 80) {
        flowersPrice += flowersPrice * 0.20;
    }
    
    let diff = Math.abs(budget - flowersPrice);

    if (budget >= flowersPrice) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${diff.toFixed(2)} leva left.`)
    } else {
        console.log (`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }

}
newHouse("Roses", 55, 250);
newHouse("Tulips", 88, 260);
