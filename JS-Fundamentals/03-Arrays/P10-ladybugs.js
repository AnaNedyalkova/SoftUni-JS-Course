// Given field size
// No ladybug => 1; Ladybug => 1
// Given initial ladybug indecies
// Commands -> index, direction, fly length
// While it lands on another ladybug => Continues with same length, same direction 
// If out of fields -> It's gone
// If no ladybug on given index => nothing happens - done

function ladybugs(arr) {

    let fieldSize = arr[0];
    let ladybugIndxs = arr[1].split(' ').map(Number);

    let field = []; //create the field

    // 01.BUILD THE FIELD
    // 01.1 create boxes -> place ladybugs in boxes
    for (let i = 0; i < fieldSize; i++) {
        if (ladybugIndxs.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    // 02.READ COMMANDS
    for (let i = 2; i < arr.length; i++) {
        let command = arr[i];
        let tokens = command.split(' ');
        // parse command elements
        let ladybugIndex = Number(tokens[0]);
        let direction = tokens[1];
        let commandMove = Number(tokens[2]);

        if (!field[ladybugIndex]) {  // check if there is ladybug on the given index
            continue;
        }

        field[ladybugIndex] = 0;// ladaybug flies away, and now it becomes 0

        if (direction == 'right') {
            let newIndex = ladybugIndex + commandMove;

            if (newIndex < field.length) {  // only if it's in the arrays
                while (field[newIndex] == 1) { // check if there is another ladybug , if yes, fly the same length 
                    newIndex += commandMove;
                }
                if (newIndex < field.length) { // check again if the ladybug will be in the array
                    field[newIndex] = 1; // move the ladybug on the new index
                }
            }

        } else {
            let newIndex = ladybugIndex - commandMove;

            if (newIndex >= 0) {  // only if it's in the arrays
                while (field[newIndex] == 1) { // check if there is another ladybug , if yes, fly the same length 
                    newIndex -= commandMove;
                }
                if (newIndex >= 0) { // check again if the ladybug will be in the array
                    field[newIndex] = 1; // move the ladybug on the new index
                }
            }
        }
    }
    console.log(field.join(' '))
}
ladybugs(
    [ 3, '0 1 2',

        '0 right 1',
        
        '1 right 1',
        
        '2 right 1']);