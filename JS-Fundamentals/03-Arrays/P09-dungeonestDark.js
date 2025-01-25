function dungeonestDark(str) {
    let health = 100;
    let coins = 0;
    let currentRoom = 1;

    let rooms = str.split('|');
    for (let room of rooms) {
        let tokens = room.split(' ');
        let command = tokens[0];
        let value = Number(tokens[1]);

        if (command === 'potion') {
            let healthAdded = value;

            if (health + healthAdded > 100) {
                healthAdded = 100 - health; //за да имаме точно сумата която добавяме
            }
            health += healthAdded;
            console.log(`You healed for ${healthAdded} hp.`);
            console.log(`Current health: ${health} hp.`);


        } else if (command === 'chest') {
            let coinsFound = value;
            coins += coinsFound;
            console.log(`You found ${coinsFound} coins.`);

        } else {
            let monsterName = command;
            let attack = Number(value);

            health -= attack;

            if (health > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${currentRoom}`);
                return;
            }
        }
        currentRoom++;
    }

    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);

}
dungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");