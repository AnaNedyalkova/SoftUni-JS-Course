function cake(input) {
    let cakeLength = Number(input[0]);
    let cakeWidth = Number(input[1]);
    let cakePieces = cakeLength * cakeWidth;
    
    let index = 2;
    let command = Number(input[index]);

    let piecesTaken = 0;

    while (command !== 'STOP') {
        let pieces = Number(command);
        
        piecesTaken += pieces;

        if (piecesTaken > cakePieces) {
            
            let piecesNeeded = piecesTaken - cakePieces;
            console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
            
            return;
        }
        index++;
        command = input[index];
    }
    
    let piecesLeft = cakePieces - piecesTaken;
    console.log(`${piecesLeft} pieces are left.`);
}


cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);