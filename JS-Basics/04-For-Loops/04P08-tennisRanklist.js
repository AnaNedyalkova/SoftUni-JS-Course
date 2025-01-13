function tennisRanklist(input) {
    // TODO:
    // 1. Get known values - x
    // 2. Create variables - x
    // 3. For loop - 
    // 3.1. Handle tournament
    // 4. Calculate final points
    // 5. Calculate average season points
    // 6. calculate win percentage
    // 7. Print results

    let tournamentCOunt = Number(input[0]);
    let initialPoints = Number(input[1]);

    let seasonPoints = 0;
    let tournamentsWon = 0;

    let n = tournamentCOunt + 1; // SAME AS let n = input.length - 1;

    for (let i = 2; i <= n; i++) {
        let currentTournament = input[i];

        switch (currentTournament) {
            case 'SF':
                seasonPoints += 720;
                break;
            case 'F':
                seasonPoints += 1200;
                break;
            case 'W':
                seasonPoints += 2000;
                tournamentsWon++;
                break;
        }
    }

    let finalPoints = initialPoints + seasonPoints;
    let averagePoints = seasonPoints / tournamentCOunt;

    let winRate = tournamentsWon / tournamentCOunt * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winRate.toFixed(2)}%`);
}
// tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);   