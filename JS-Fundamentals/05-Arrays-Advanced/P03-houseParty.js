function houseParty(arr) {
    let guestList = [];

    for (commands of arr) {

        let tokens = commands.split(' ');
        let name = tokens.shift();

        if (tokens.includes('not')) {
            let index = guestList.indexOf(name);  //find the index of the guest

            if(guestList.includes(name)) {
                guestList.splice(index,1);  //remove that guest
            } else {
                console.log(`${name} is not in the list!`)
            }

        } else { 

            if (guestList.includes(name)){
                console.log(`${name} is already in the list!`)
            } else {
                guestList.push(name);

            }
        }

    }

console.log(guestList.join('\n'))

}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);