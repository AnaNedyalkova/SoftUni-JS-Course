function backInTime(arg1, arg2) {
    let inheritedMoney = Number(arg1);
    let lastLivingYear = Number(arg2);

    let startYear = 1800;
    let moneySpent = 0;
    let age = 18;
    let allMoneySpent = 0;

    for (let i = startYear; i <= lastLivingYear; i++) {
        if (i % 2 === 0) {
            moneySpent = 12000;
        } else {
            moneySpent = 12000 + 50 * age;
        }
        age += 1; // !!! add birthdays after first iteration
        allMoneySpent += moneySpent; //!!! calculate after If else conditions
    }

    let diff = Math.abs(inheritedMoney - allMoneySpent);

    if (allMoneySpent <= inheritedMoney) {
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`)
    }

}
backInTime(50000, 1802);
backInTime(100000.15, 1808);