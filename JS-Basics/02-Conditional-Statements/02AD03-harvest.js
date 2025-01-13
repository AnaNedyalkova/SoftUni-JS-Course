function harvest(totalSquareMeters,grapeForOneSuqareMeter, neededWineLiters, workersNumber) {

    let grapesTotal = totalSquareMeters * grapeForOneSuqareMeter;
    let grapeNeededforOneLiter = 2.5;
    let grapesForWine = grapesTotal * 0.40;
    let wineTotal = grapesForWine / 2.5;
    
    let diff = Math.abs(wineTotal - neededWineLiters);
    let litersPerPerson = Math.ceil(diff / workersNumber);

    if(wineTotal < neededWineLiters) {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineTotal)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${litersPerPerson} liters per person.`); }
}
harvest(650, 2, 175, 3);
harvest(1020, 1.5, 425, 4);