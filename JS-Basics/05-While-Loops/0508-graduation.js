function graduation(input) {
    let index = 0;
    let studentName = input[index];
    index++
    let sumGrade = 0;

    let i = 1;
    let badGradeCounter = 0;
    let isExcluded = false;

    while (i <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4.00) {
            badGradeCounter++;
            if(badGradeCounter == 2) {
                isExcluded = true;
                console.log(`${studentName} has been excluded at ${i} grade`);
                break;
            }
            continue;
        }

        sumGrade += grade;
        i++;

    }

    if (!isExcluded) {
        let avgGrade  = sumGrade / 12;;
        console.log(`${studentName} graduated. Average grade: ${avgGrade.toFixed(2)} `)
    }
    
}
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);