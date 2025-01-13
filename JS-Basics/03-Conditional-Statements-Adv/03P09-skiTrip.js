//TODO
// 1. Calculate price x 
// 2. Calculate discount x 
// 2.1. Handle days x 
// 2.2. Handle accom type x 
// 2.3. Calculate x
// 3. Handle review 
// 4. Print result
function skiTrip(daysCount, accomodationType, review) {

    let expenses = 0;

    switch (accomodationType) {
        case 'room for one person':
            expenses = (daysCount - 1) * 18;
            break;
        case 'apartment':
            expenses = (daysCount - 1) * 25;
            break;
        case 'president apartment':
            expenses = (daysCount - 1) * 35;
            break;
    }

    if (daysCount < 10) {
        switch (accomodationType) {
            case 'apartment':
                expenses -= expenses * 0.30;
                break;
            case 'president apartment':
                expenses -= expenses * 0.10;
                break;
        }

    } else if (daysCount >= 10 && daysCount <= 15) {
        switch (accomodationType) {
            case 'apartment':
                expenses -= expenses * 0.35;
                break;
            case 'president apartment':
                expenses -= expenses * 0.15;
                break;
        }

    } else if (daysCount > 15) {
        switch (accomodationType) {
            case 'apartment':
                expenses -= expenses * 0.50;
                break;
            case 'president apartment':
                expenses -= expenses * 0.20;
                break;
        }
    }

    switch (review) {
        case 'positive':
            expenses += expenses * 0.25;
            break;
        case 'negative':
            expenses -= expenses * 0.10;
            break;
    }

    console.log (expenses.toFixed(2))

}
skiTrip(14, "apartment", "positive");
skiTrip(30, "president apartment", "negative");
skiTrip(12, "room for one person", "positive");
skiTrip(2, "apartment", "positive");