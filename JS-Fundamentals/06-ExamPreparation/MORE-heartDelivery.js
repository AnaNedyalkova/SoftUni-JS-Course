function heartDelivery(arr) {
    let houses = arr.shift().split('@').map(Number);


    let command = arr.shift();
    let indexHouse = 0;

    while (command !== 'Love!') {
        let tokens = command.split(' ');
        let jumpLength = Number(tokens[1]);

        indexHouse += jumpLength; //jump

        // We we jumped over the houses go to index 0
        if (indexHouse >= houses.length) {
            indexHouse = 0;
        }

        // Check if we visit a house that already had valentines day
        if (houses[indexHouse] === 0) {
            console.log(`Place ${indexHouse} already had Valentine's day.`)
        } else {
            // In this case there are more hearts to take
            houses[indexHouse] -= 2;
            // We must immediately print when we reach 0.
            if (houses[indexHouse] === 0) {
                console.log(`Place ${indexHouse} has Valentine's day.`)
            }
        }

        // Move to next command.
        command = arr.shift();
    }

    console.log(`Cupid's last position was ${indexHouse}.`)

    let sum  = 0;
    let houseCount = 0;
    for (let el of houses) {
        sum += el;
        if (el !== 0) {
            houseCount++;
        } 
    }

    if (sum == 0) {
        console.log(`Mission was successful.`)
    } else {
        console.log(`Cupid has failed ${houseCount} places.`);
        
    }


}
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);