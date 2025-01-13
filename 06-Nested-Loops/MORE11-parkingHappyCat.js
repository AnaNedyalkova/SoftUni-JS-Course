function parkingHappyCat (daysTotal, hoursPerDay) {

    let daysCounter = 0; 
    let sumPerDay = 0;
    let sumTotal = 0;

    for (let day = 1; day <= daysTotal; day++) {
        daysCounter++;
        sumPerDay = 0;

        for ( let hour = 1; hour <= hoursPerDay; hour++) {
            if (day % 2 === 0 && hour % 2 !== 0) {
                sumPerDay += 2.50;
    
            } else if (day % 2 !== 0 && hour % 2 === 0 ) {
                sumPerDay += 1.25;
            } else {
                sumPerDay += 1.00;
            }
        }
        sumTotal += sumPerDay
        console.log (`Day: ${daysCounter} - ${sumPerDay.toFixed(2)} leva`);
        
    }
    console.log(`Total: ${sumTotal.toFixed(2)} leva`);
 
}
parkingHappyCat(5, 2);
