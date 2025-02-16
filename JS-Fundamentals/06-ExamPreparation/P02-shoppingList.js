function shoppingList(arr) {
    let list = arr.shift().split('!');

    let command = arr.shift();

    while (command !== 'Go Shopping!') {
        let tokens = command.split(' ');
        let action = tokens.shift();
        let item = tokens.shift();

        if (action === 'Urgent') {
            if (!list.includes(item)) {
                list.unshift(item);
            }

        } else if (action === 'Unnecessary') {
            let index = list.indexOf(item);
            if (index !== -1) {
                list.splice(index, 1);
            }


        } else if (action === 'Correct') {
            let newItem = tokens.shift();
            let index = list.indexOf(item);
            if(index !== -1) {
                list.splice(index, 1, newItem);
            }

        } else if (action == 'Rearrange') {
            let index = list.indexOf(item);
            if(index !== -1) {
                list.splice(index,1);
                list.push(item);
            }
        }

        command = arr.shift()
    }

    console.log(list.join(', '));

}
shoppingList(["1",
    "1.5",
    "3",
    "1.5"]);