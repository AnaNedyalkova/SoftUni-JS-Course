function spiceMustFlow(startingDayYield) {

    let totalProfit  = 0;
    let currentProfit = 0;
    let counter = 0;
    
    while (startingDayYield >= 100) {
        currentProfit += startingDayYield;
        currentProfit -= 26;
        startingDayYield -= 10;
        counter++;
    }


    totalProfit += currentProfit;
    
    if (totalProfit >= 26) {
        totalProfit -= 26;
    }

    console.log(counter);
    console.log(totalProfit);

}
spiceMustFlow(50);