function walking(input) {
    let index = 0;
    let command = input[index];
    let totalSteps = 0;

    while (command !== 'Going home') {
        let currentSteps = Number(command);

        totalSteps += currentSteps;

        if (totalSteps >= 10000) {
            let stepsOver = totalSteps - 10000;
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsOver} steps over the goal!`);

            return;
        }

        index++;
        command = input[index];
    }

    index++;
    let additionalSteps = Number(input[index]);
    totalSteps += additionalSteps;

    let diff = Math.abs(totalSteps - 10000)
        ;
    if (totalSteps >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`)
    }
}
walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["125", "250", "4000", "30", "2678", "4682"]);
