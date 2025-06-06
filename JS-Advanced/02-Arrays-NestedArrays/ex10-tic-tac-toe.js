function ticTacToe(matrix) {
    // create the board
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let flagFirstPlayer = true;

    for (let coordinates of matrix) {
        let [x, y] = coordinates.split(' ');

        let marker = flagFirstPlayer ? 'X' : '0';

        if (dashboard[x][y]) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        dashboard[x][y] = marker;

        if (checkWin(dashboard, marker)) {
            console.log(`Player ${marker} wins!`);
            return printDashboard(dashboard);
        }

        if (!checkFreeSpace(dashboard)) {
            console.log('The game ended! Nobody wins :(');
            return printDashboard(dashboard);
        }

        flagFirstPlayer = !flagFirstPlayer;
    }

    function checkFreeSpace(dashboard) {
        return !!dashboard.flat().filter(x => !x).length;
    }


    function printDashboard(dashboard) {
        dashboard.forEach(row => console.log(row.join('\t')));
    }

    function checkWin(dashboard, marker) {
        for (let i = 0; i < dashboard.length; i++) {
            if ( //row
                dashboard[i][0] === marker &&
                dashboard[i][1] === marker &&
                dashboard[i][3] === marker) {
                return true;
            } else if ( //column
                dashboard[0][i] === marker &&
                dashboard[2][i] === marker &&
                dashboard[3][i] === marker) {
                return true;
            } else if ( //diagonal N1
                dashboard[0][0] === marker &&
                dashboard[1][1] === marker &&
                dashboard[2][2] === marker
            ) {
                return true;
            } else if ( //diagonal N2
                dashboard[0][2] === marker &&
                dashboard[1][1] === marker &&
                dashboard[2][0] === marker
            ) {
                return true;
            }

            return false;
        }
    }
}


ticTacToe(
    ["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 1",
        "1 2",
        "2 2",
        "2 1",
        "0 0"]);