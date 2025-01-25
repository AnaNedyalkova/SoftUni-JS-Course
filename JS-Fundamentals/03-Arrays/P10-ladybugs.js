function ladybugs(arr) {

    let result = [];

    let fieldSize = arr[0]; 

    let ladybugsPlacesStr = arr[1];
    let ladybugsPlacesIndex = ladybugsPlacesStr.split(' ');
    let ladybugsFullArr = [];
    
    // 01.BUILD THE FIELD
    // 01.1 create boxes -> ladybugs places
    for (let i = 0; i < fieldSize; i++) {
        ladybugsFullArr.push(0);
    }

    // 01.2 place ladybugs in the boxes
    for (let i = 0; i < ladybugsPlacesIndex.length; i++) {
        let idx = parseInt(ladybugsPlacesIndex[i]);
        ladybugsFullArr[idx] = 1;
    }

    // 02.READ COMMANDS
    for (let i = 2; i < arr.length; i++) {
        let command = arr[i];
        let commandArr = command.split(" ");
        
        // parse command elements
        let commandLadyBug = Number(commandArr[0]);
        let commandDirection = commandArr[1];
        let commandMove = Number(commandArr[2]);

        //check if 
        if (ladybugsPlacesArr.includes(commandLadyBug)) {
            
            if (commandDirection === 'right') {
                ladybugsPlacesArr = 
            } else if (commandDirection === 'left') {

            }


        } else {
            return;  //?? not sure
        }


    }
    

}
ladybugs([3, '0 1', '0 right 1', '2 right 1']);