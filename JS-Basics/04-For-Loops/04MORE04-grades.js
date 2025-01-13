function grades(input) {
    let studentsCount = Number(input[0]);
    let averageScore = 0;
    let n = input.length - 1;
    let groupTop = 0;
    let group4 = 0;
    let group3 = 0;
    let groupFail = 0;
    let scoreSum = 0;

    for (let studentScore = 1; studentScore <= n; studentScore++) {
        let currentStudentScore = Number(input[studentScore]);
        scoreSum += currentStudentScore;

        if (currentStudentScore >= 5) {
            groupTop++
        } else if (currentStudentScore >= 4 && currentStudentScore <= 4.99) {
            group4++
        } else if (currentStudentScore >= 3 && currentStudentScore <= 3.99) {
            group3++
        } else if (currentStudentScore >= 2 && currentStudentScore <= 2.99) {
            groupFail++
        }
    }

    averageScore = scoreSum / studentsCount;

    let percentTop = groupTop / studentsCount * 100;
    let percent4 = group4 / studentsCount * 100;
    let percent3 = group3 / studentsCount * 100;
    let percentFail = groupFail / studentsCount * 100;

    console.log(`Top students: ${percentTop.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percent4.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percent3.toFixed(2)}%`);
    console.log(`Fail: ${percentFail.toFixed(2)}%`);
    console.log(`Average: ${averageScore.toFixed(2)}`);
}
grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
grades(["6", "2", "3", "4", "5", "6", "2.2"]);

