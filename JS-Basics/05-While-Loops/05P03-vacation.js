function vacation(input) {
    let moneyNeededForVacation = Number(input[0]);
    let moneyNow = Number(input[1]);

    let index = 2;
    let command = input[index];
    let daysSpendingCounter = 0;
    let daysCounter = 0;

    while (moneyNow < moneyNeededForVacation) {
        let action = command;
        index++;
        let money = Number(input[index]);

        if (action === 'spend') {
            moneyNow -= money;
            if (money > moneyNow) {
                moneyNow = 0;
            }
            daysSpendingCounter++;
            daysCounter++;
            if (daysSpendingCounter === 5) {
                console.log("You can't save the money.");
                console.log(`${daysCounter}`);
                return;
            }
        } else if (action === 'save') {
            moneyNow += money;
            daysCounter++;
            daysSpendingCounter = 0;
        }
        index++;
        command = input[index];
    }
    console.log(`You saved the money for ${daysCounter} days.`)

}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);
