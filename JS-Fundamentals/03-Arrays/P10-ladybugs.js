function ladybugs(arr) {

    let fieldSize = arr[0];

    let ladybugIndxs = arr[1].split(' ');
    let field = [];

    // 01.BUILD THE FIELD
    // 01.1 create boxes -> ladybugs places
    for (let i = 0; i < fieldSize; i++) {
        field.push(0);
    }

    // 01.2 place ladybugs in the boxes
    for (let i = 0; i < ladybugsPlacesIndex.length; i++) {
        let idx = parseInt(ladybugsPlacesIndex[i]);
        field[idx] = 1;
    }
    //check if 
    if (ladybugsPlacesArr.includes(commandLadyBug))



        // 02.READ COMMANDS
        for (let i = 2; i < arr.length; i++) {
            let command = arr[i];
            let tokens = command.split(" ");

            // parse command elements
            let ladybugIndex = Number(tokens[0]);
            let direction = tokens[1];
            let commandMove = Number(tokens[2]);

        }


    }
    ladybugs([3, '0 1', '0 right 1', '2 right 1']);