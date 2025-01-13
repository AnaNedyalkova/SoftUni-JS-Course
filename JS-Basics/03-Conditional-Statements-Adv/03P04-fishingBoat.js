// TODO
// 1. Handle boat price x
// 2. Handle discount x
// 3. Hanlde additional discount
// 4. Print
// 4.1 budget enough
//4.2. budget not enough
function fishingBoat(budget, season, fishermenCount) {
    let expenses = 0;

    switch (season) {
        case 'Spring':
            expenses = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            expenses = 4200;
            break;
        case 'Winter':
            expenses = 2600;
            break;
    }

    if (fishermenCount <= 6) {
        expenses -= expenses * 0.10;
    } else if (fishermenCount >= 7 && fishermenCount <= 11) {
        expenses -= expenses * 0.15;
    } else if (fishermenCount >= 12) {
        expenses -= expenses * 0.25;
    }

    if (fishermenCount % 2 === 0 && season !== 'Autumn') {
        expenses -= expenses * 0.05;
    }

    let diff = Math.abs(budget - expenses);

    if ( budget >= expenses) {
        console.log (`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }


}

fishingBoat(3000, "Summer", 11);
fishingBoat(3600, "Autumn", 6);
fishingBoat(2000, "Winter", 13);
