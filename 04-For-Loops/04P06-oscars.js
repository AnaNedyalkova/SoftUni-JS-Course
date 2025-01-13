function oscars(input) {
    let actor = input[0];
    let points = Number(input[1]);
    let judges = Number(input[2]);

    let n = input.length - 1;

    for(let i = 3; i <= n; i += 2) {
        let judgeName = input[i];
        let judgePoints = Number(input[i + 1]);

        points += judgeName.length * judgePoints / 2; 

        //console.log(points);

        if(points >= 1250.5) {
            break;
        }
    }

    if (points >= 1250.5) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        let diff = 1250.5 - points;
        console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`);
    } 
}
oscars(["Zahari Baharov", "205", 4, "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);