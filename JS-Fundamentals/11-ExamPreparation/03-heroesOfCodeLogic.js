// structure:
// {
//     Solmyr: { hitPoints: 100, manaPoints: 35 },
//     Kyrre: { hitPoints: 85, manaPoints: 45 }
//   }

//!!! hero can have a maximum of 100 HP and 200 MP

function heroesOfCodeLogic(arr) {
    let numberOfHeroes = Number(arr.shift());
    let heroesStats = {};

    for (let i = 1; i <= numberOfHeroes; i++) {
        let [name, hitPoints, manaPoints] = arr.shift().split(' ');
        hitPoints = Number(hitPoints);
        manaPoints = Number(manaPoints);

        heroesStats[name] = { hitPoints, manaPoints };
    }

    let command = arr.shift();

    while (command !== 'End') {
        let tokens = command.split(' - ');
        let action = tokens.shift();
        let name = tokens.shift();
        let currentHero = heroesStats[name];

        if (action == 'CastSpell') {

            let mPNeeded = Number(tokens[0]);
            let spellName = tokens[1];

            if (currentHero.manaPoints >= mPNeeded) {
                currentHero.manaPoints -= mPNeeded;
                console.log(`${name} has successfully cast ${spellName} and now has ${currentHero.manaPoints} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);

            }

        } else if (action == 'TakeDamage') {

            let damage = Number(tokens[0]);
            let attacker = tokens[1];

            if (currentHero.hitPoints > damage) {
                currentHero.hitPoints -= damage;
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${currentHero.hitPoints} HP left!`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
                delete heroesStats[name];

            }

        } else if (action == 'Recharge') {

            let amount = Number(tokens[0]);
            let oldMP = currentHero.manaPoints;
            currentHero.manaPoints += amount;

            if (currentHero.manaPoints > 200) {
                currentHero.manaPoints = 200;
            }
            console.log(`${name} recharged for ${currentHero.manaPoints - oldMP} MP!`);

        } else if (action == 'Heal') {
            let amount = Number(tokens[0]);
            let oldHP = currentHero.hitPoints;
            currentHero.hitPoints += amount;

            if (currentHero.hitPoints > 100) {
                currentHero.hitPoints = 100;
            }
            //Alternative to the above: currentHero.hitPoints = Math.min(100, currentHero.hitPoints);
            console.log(`${name} healed for ${currentHero.hitPoints - oldHP} HP!`);
        }

        command = arr.shift();
    }

    let entries = Object.entries(heroesStats);

    for (let [name, stats] of entries) {

        console.log(`${name}
  HP: ${stats.hitPoints}
  MP: ${stats.manaPoints}`);
    }

}
heroesOfCodeLogic([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ]);