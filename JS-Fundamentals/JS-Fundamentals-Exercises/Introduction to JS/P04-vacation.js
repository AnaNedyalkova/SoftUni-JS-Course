function vacation(peopleCount, groupType, day) {

    let singlePrice = 0;
    // 1. Base on groupType and day, find single price


    switch (day) {
        case 'Friday':

            if (groupType === 'Students') {
                singlePrice = 8.45;
            } else if (groupType === 'Business') {
                singlePrice = 10.90;
            } else if (groupType === 'Regular') {
                singlePrice = 15;
            }

            break;

        case 'Saturday':

            if (groupType === 'Students') {
                singlePrice = 9.80;
            } else if (groupType === 'Business') {
                singlePrice = 15.60;
            } else if (groupType === 'Regular') {
                singlePrice = 20;
            }

            break;

        case 'Sunday':

            if (groupType === 'Students') {
                singlePrice = 10.46;
            } else if (groupType === 'Business') {
                singlePrice = 16;
            } else if (groupType === 'Regular') {
                singlePrice = 22.50;
            }

            break;

    }
    // 2. Base on single price and people count, find total price
    let totalPrice = peopleCount * singlePrice;
    // 3. Check for discount and apply if there is one
    if (groupType === 'Students' && peopleCount >= 30) {
        totalPrice = totalPrice * 0.85;
    } else if (groupType === 'Business' && peopleCount >= 100) {
        totalPrice -= 10*singlePrice;
    } else if (groupType === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95;
    }
    // 4. Print result
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
    

}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");