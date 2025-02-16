function burgerBus(arr) {

    let citiesCount = Number(arr.shift());
    let totalExpenses = 0;
    let income = 0;

    for (let currentCity = 0; currentCity < citiesCount * 3; currentCity += 3){
        let cityName = arr[currentCity];
        let moneyEarned = Number(arr[currentCity + 1]);
        let moneySpent = Number(arr[currentCity + 2]);
        let cityIndex = (currentCity / 3) + 1;

        if (cityIndex % 5 === 0) {
            moneyEarned -= moneyEarned * 0.10;
            
        } else if (cityIndex % 3 === 0) {
            moneySpent += moneySpent * 0.50;
        }

        totalExpenses += moneySpent;
        income += moneyEarned;
        console.log(`In ${cityName} Burger Bus earned ${(moneyEarned- moneySpent).toFixed(2)} leva.`);
    }

    let totalProfit = income - totalExpenses;
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)

}
burgerBus(
    ["5",
        "Lille",
        "2226.00",
        "1200.60",
        "Rennes",
        "6320.60",
        "5460.20",
        "Reims",
        "600.20",
        "452.32",
        "Bordeaux",
        "6925.30",
        "2650.40",
        "Montpellier",
        "680.50",
        "290.20"]);
