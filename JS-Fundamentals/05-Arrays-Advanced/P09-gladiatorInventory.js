function gladiatorInventory(arr) {

    let inventory = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {

        let tokens = arr[i].split(' ');
        let command = tokens.shift();
        let object = tokens.shift();

        if (command === 'Buy') {
            if (!inventory.includes(object)) {
                inventory.push(object);
            }

        } else if (command === 'Trash') {
            let index = inventory.indexOf(object);
            if (inventory.includes(object)) {
                inventory.splice(index, 1);
            }
        } else if (command === 'Repair') {

            let index = inventory.indexOf(object);
            let repairedObject = inventory.splice(index, 1);
            inventory.push(repairedObject);

        } else if (command === 'Upgrade') {
            let upgradeCommand = object.split('-');
            let objectToUpgrade = upgradeCommand.shift();
            let upgrade = upgradeCommand.shift();

            if (inventory.includes(objectToUpgrade)) {
                let index = inventory.indexOf(objectToUpgrade);
                inventory.splice(index + 1, 0, `${objectToUpgrade}:${upgrade}`);
            }
        }
    }

    console.log(inventory.join(' '));

}
gladiatorInventory(
    ['SWORD Shield Spear',
        'Trash Bow',
        'Repair Shield',
        'Upgrade Helmet-V']);