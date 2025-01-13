function summerOutfit(degrees, partOfTheDay) {

    let outfit = '';
    let shoes = '';


    if (degrees >= 10 && degrees <= 18) {
        switch (partOfTheDay) {
            case 'Morning':
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
                break;
            case 'Afternoon':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
            case 'Evening':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
        }
    } else if (degrees > 18 && degrees <= 24) {
        switch (partOfTheDay) {
            case 'Morning':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
            case 'Afternoon':
                outfit = 'T-Shirt';
                shoes = 'Sandals';
                break;
            case 'Evening':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
        }
    } else if (degrees >= 25) {
        switch (partOfTheDay) {
            case 'Morning':
                outfit = 'T-Shirt';
                shoes = 'Sandals';
                break;
            case 'Afternoon':
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
                break;
            case 'Evening':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}

summerOutfit(16, "Morning");
summerOutfit(22, "Afternoon");
summerOutfit(28, "Evening");