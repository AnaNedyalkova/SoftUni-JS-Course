function addBags(i) {
    let priceOver20kg = Number(i[0]);
    let bagsKg = Number(i[1]);
    let daysTillTravel = Number(i[2]);
    let bagsCount = Number(i[3]);

    let tax = 0;

    if (bagsKg <= 10) {
        tax = priceOver20kg * 0.20;
    } else if (bagsKg > 10 && bagsKg <= 20) {
        tax = priceOver20kg * 0.50;
    } else if (bagsKg > 20) {
        tax = priceOver20kg;
    }

    if (daysTillTravel > 30) {
        tax *= 1.10;
    } else if (daysTillTravel >= 7 && daysTillTravel <= 30) {
        tax *= 1.15;
    } else if (daysTillTravel < 7) {
        tax *= 1.40;
    }

    let totalCost = bagsCount * tax;

    console.log(`The total price of bags is: ${totalCost.toFixed(2)} lv.`)
}
addBags([30,18,15,2]);
addBags([25.50,5,36,6]);
addBags([63.80,23,3,1]);

