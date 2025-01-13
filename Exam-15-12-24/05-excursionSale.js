function excursionSale(input) {
    let seaVacations = Number(input[0]);
    let mauntainVacations = Number(input[1]);

    let index = 2;
    let command = input[index];

    let totalPrice = 0;

    while (command !== 'Stop') {
        let vacationType = input[index];


        if (vacationType === 'sea') {
            totalPrice += 680;
            if (seaVacations === 0) {
                totalPrice -= 680;
            }
            seaVacations--;
        } else if (vacationType === 'mountain') {
            totalPrice += 499;
            if (mauntainVacations === 0) {
                totalPrice -= 499;
            }
            mauntainVacations--;
        }
        if (mauntainVacations <= 0  && seaVacations <= 0) {
            console.log(`Good job! Everything is sold.`)
            console.log(`Profit: ${totalPrice} leva.`)
            return;
        } 
        
        index++;
        command = input[index];
    }
    
    console.log(`Profit: ${totalPrice} leva.`)
    
}

excursionSale(["2", "2", "sea", "mountain", "sea", "sea", "mountain"]);
excursionSale(["6", "3", "sea", "mountain", "mountain", "mountain", "sea", "Stop"]);