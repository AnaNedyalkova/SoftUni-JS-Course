function journey(budget, season) {
    let price = 0;
    let destination = '';
    let typeVacation = '';

    if (budget <= 100) {
        destination = 'Bulgaria';
        switch (season) {
            case 'summer':
                price = budget * 0.30;
                break;
            case 'winter':
                price = budget * 0.70;
                break;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans'
        switch (season) {
            case 'summer':
                price = budget * 0.40;
                break;
            case 'winter':
                price = budget * 0.80;
                break;
        }
    } else if (budget > 1000) {
        destination = 'Europe'
        price = budget * 0.90;
    }

    if (season == 'winter' || destination == 'Europe') {
        typeVacation = 'Hotel'
    } else if (season == 'summer') {
        typeVacation = 'Camp'
    }

    console.log(`Somewhere in ${destination}`)
    console.log(`${typeVacation} - ${price.toFixed(2)}`)

}
journey(50, "summer");
journey(75, "winter");
journey(312, "summer");
journey(678.53, "winter");
journey(1500, "summer");