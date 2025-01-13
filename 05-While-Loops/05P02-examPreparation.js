//TODO:
//1. Get known arguments x
//2. Create helper variables x
//2.1. Index
//2.2. Sum of grades
//2.3. Problem solved
//2.4. Last problem Solved
//2.5. Poor grades counter
//3. While loop
//3.1. Get current arguments - 2 
//3.2. Update helper variables
//3.3. Handle poor grades
//3.4. Update index
//4. Print results

function examPreparation(input) {

    let poorGradesLimit = Number(input[0]);

    let index = 1;
    let command = input[index];
    let gradesSum = 0;
    let problemsSolved = 0;
    let lastProblemSolved = '';
    let poorGradesCount = 0;

    while (command !== 'Enough') {
        let problemName = command; // vzimam ime na zadacha
        index++;  //otivam na sledvashiq element
        let grade = Number(input[index]);  // vzimam ocenka

        gradesSum += grade;
        problemsSolved++;
        lastProblemSolved = problemName;

        if (grade <= 4) {
            poorGradesCount++;

            if (poorGradesCount === poorGradesLimit) {
                console.log(`You need a break, ${poorGradesCount} poor grades.`);

                return;
            }
        }

        index++;
        command = input[index];
    }

    let averageScore = gradesSum / problemsSolved;

    console.log(`Average score: ${averageScore.toFixed(2)}`);
    console.log(`Number of problems: ${problemsSolved}`);
    console.log(`Last problem: ${lastProblemSolved}`);
}

examPreparation(["3",

    "Money",
    
    "6",
    
    "Story",
    
    "4",
    
    "Spring Time","5",
    
    "Bus",
    
    "6",
    
    "Enough"])
//examPreparation(["2", "Income", "3", "Game", "Info", "6", "Best", "Player", "4"]);