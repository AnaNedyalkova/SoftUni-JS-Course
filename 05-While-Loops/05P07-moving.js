function moving(input) {

    let spaceWidth = Number(input[0]);
    let spaceLength = Number(input[1]);
    let spaceHeight = Number(input[2]);

    let space = spaceHeight * spaceLength * spaceWidth;

    let index = 3;
    let command = input[index];
    let spaceTaken = 0;

    while (command !== 'Done') {
        let boxes = Number(command);

        spaceTaken += boxes;

        if (spaceTaken > space) {
            let spaceNeeded = spaceTaken - space;
            console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`);

            return;
        }
        index++;
        command = input[index];
    }

    let spaceLeft = space - spaceTaken;
    console.log(`${spaceLeft} Cubic meters left.`);

}
//moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);