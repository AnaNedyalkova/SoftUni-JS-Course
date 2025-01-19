function gladiatorExpenses (lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBreakkCounts = 0;

// ползвам цикъл като брояч
    for (currentLostFight = 1; currentLostFight <= lostFightsCount; currentLostFight++){
        if (currentLostFight % 2 === 0) {
            expenses += helmetPrice;
        }

        if (currentLostFight % 3 === 0) {
            expenses += swordPrice;

        }
        if (currentLostFight % 2 === 0 && currentLostFight % 3 === 0) {
            expenses += shieldPrice;
            shieldBreakkCounts++;
        }
        if(shieldBreakkCounts % 2  === 0 && shieldBreakkCounts !== 0) { //we must make sure it;s not 0
            expenses += armorPrice;
            shieldBreakkCounts = 0; // reset the count
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);