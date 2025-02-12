function counterStrike(arr) {

    let initialEnergy = Number(arr.shift());
    //stuff related to the while loop
    let index = 0;
    let command = arr[index];

    let wonBattlesCounter = 0;
    let isNotEnough = false;  // create flag for the case where the player wins and have energy left

    while (command !== 'End of battle') {
        let currentDistance = Number(command);

        if (currentDistance > initialEnergy) {
            isNotEnough = true;
            console.log(`Not enough energy! Game ends with ${wonBattlesCounter} won battles and ${initialEnergy} energy`)
            break;
        }

        wonBattlesCounter++;
        initialEnergy -= currentDistance;

        if (wonBattlesCounter % 3 === 0) {
            initialEnergy += wonBattlesCounter;
        }

        index++;
        command = arr[index];
    }

    if (!isNotEnough) {  //if false then we won 
        console.log(`Won battles: ${wonBattlesCounter}. Energy left: ${initialEnergy}`)
    }

}
counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]);