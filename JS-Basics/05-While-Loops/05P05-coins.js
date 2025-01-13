function coins(change) {
    //TOD:
    //1. Calculate change in stotinki
    //2. Create helper variables (coins used)
    //3. while loop
    //3.1. Handle different coins
    //3.2. Update coins used
    //4. Print results

    let changeStotinki = Math.round(change * 100);

    let coinsUsed = 0;

    while (changeStotinki > 0) {
        coinsUsed++;

        if (changeStotinki >= 200) {
            changeStotinki -= 200;
        } else if (changeStotinki >= 100) {
            changeStotinki -= 100;
        } else if (changeStotinki >= 50) {
            changeStotinki -= 50;
        } else if (changeStotinki >= 20) {
            changeStotinki -= 20;
        } else if (changeStotinki >= 10) {
            changeStotinki -= 10;
        } else if (changeStotinki >= 5) {
            changeStotinki -= 5;
        } else if (changeStotinki >= 2) {
            changeStotinki -= 2;
        } else if (changeStotinki >= 1) {
            changeStotinki -= 1;
        }
    }
console.log(coinsUsed);

}
//coins(1.23);
//coins(2);
coins(0.56);
coins(2.73);