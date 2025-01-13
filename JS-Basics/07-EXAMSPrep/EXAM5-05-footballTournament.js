function footballTournament(input) {
    let index = 0;

    let name = input[index];
    index++;

    let gamesCount = Number(input[index]);
    index++;

    let winPointsCount = 0;

    let countW = 0;
    let countD = 0;
    let countL = 0;

    for (let i = 0; i <= gamesCount; i++) {
        let result = input[index];
        index++;

        switch (result) {
            case "W":
                winPointsCount += 3;
                countW++;
                break;
            case "D":
                winPointsCount += 1;
                countD++;
                break;
            case "L":
                countL++;
                break;
        }
    }

    if(gamesCount === 0) {
        console.log(`${name} hasn't played any games during this season.`);
    } else {
        let winRate = countW / gamesCount * 100;
        console.log(`${name} has won ${winPointsCount} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${countW}`);
        console.log(`## D: ${countD}`);
        console.log(`## L: ${countL}`);
        console.log(`Win rate: ${winRate.toFixed(2)}%`);
    }

}
//footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
footballTournament(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"])