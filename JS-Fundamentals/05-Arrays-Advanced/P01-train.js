function train(arr) {

    let wagons = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());


    for (let command of arr) {

        if (command.includes('Add')) {
            let tokens= command.split(' ');//['Add','10']
            let newWagon = Number(tokens[1]);
            wagons.push(newWagon);
        } else {
            newWagon = Number(command);

            for (let index in wagons) {

                if (newWagon + wagons[index] <= maxCapacity) {
                    wagons[index] += newWagon;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '))
}
train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']);