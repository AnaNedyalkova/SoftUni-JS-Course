function invetory(arr) {

    let collection = arr.shift().split(', ');

    let index = 0;
    let command = arr[index];

    while (command !== 'Craft!') {

        let tokens = command.split(' - ');
        let action = tokens.shift();

        switch (action) {
            case 'Collect':
                let item = tokens[0];
                if (!collection.includes(item)) {
                    collection.push(item);
                }
                break;

            case 'Drop':
                let itemDrop = tokens[0];
                if (collection.includes(itemDrop)) {
                    let itemIndex = collection.indexOf(itemDrop);
                    collection.splice(itemIndex, 1);
                }
                break;

            case 'Combine Items':
                let combinedItems = tokens[0].split(':');
                let oldItem = combinedItems.shift();
                let newItem = combinedItems[0];
                let indexOfOldItem = collection.indexOf(oldItem);
                if (collection.includes(oldItem)) {
                    collection.splice(indexOfOldItem + 1, 0, newItem);
                }
                break;

            case 'Renew':
                let renewItem = tokens[0];
                let renewItemIndex = collection.indexOf(renewItem);
                if(collection.includes(renewItem)) {
                    collection.splice(renewItemIndex,1);
                    collection.push(renewItem)
                }
                break;
        }

        index++;
        command = arr[index];
    }

    console.log(collection.join(', '))
}
invetory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);