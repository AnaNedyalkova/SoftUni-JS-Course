function excurtionCalculator(peopleCount, season) {

    let pricePerPerson = 0;

    switch (season) {
        case 'spring':
            if (peopleCount <= 5) {
                pricePerPerson = 50;
            } else {
                pricePerPerson = 48;
            }
            break;
        case 'summer':
            if (peopleCount <= 5) {
                pricePerPerson = 48.50;
            } else {
                pricePerPerson = 45;
            }
            break;
        case 'autumn':
            if (peopleCount <= 5) {
                pricePerPerson = 60;
            } else {
                pricePerPerson = 49.50;
            }
            break;
        case 'winter':
            if (peopleCount <= 5) {
                pricePerPerson = 86;
            } else {
                pricePerPerson = 85;
            }
            break;
    }

    let totalSum = pricePerPerson * peopleCount;

    if (season === 'summer') {
        totalSum -= totalSum * 15 / 100;

    } else if (season === 'winter') {
        totalSum += totalSum * 8 / 100;
    }


    console.log(`${totalSum.toFixed(2)} leva.`);
}
excurtionCalculator(5, 'spring');
excurtionCalculator(10, 'summer');
excurtionCalculator(15, 'autumn');
excurtionCalculator(20, 'winter');


