function trainTheTrainers (input) {
// TODO:
// 1. Get known argumnets 
// 2. Create helper variables
  // 2.1. Index
  // 2.2. sumGrades
  // 2.3. presentations Count
// 3. while loop
  // 3.1. Update index
  // 3.2. Get current presentation
  // 3.3. Create helper variable (sum of grades)
  // 3.4. For loop
    // 3.4.1. Get current grade
    // 3.4.2. Update current sum of grades
  // 3.5. Calculate current average grade
  // 3.6. Update presentation variables/count
  // 3.7. Print current result
// 4. Calculate average grade
// 5. Print result

let judgesCount = Number(input[0]);

let index = 1;
let command = input[index];
let gradesSum = 0;
let presentationsCount = 0;

while (command !== 'Finish') {
    let presentation = command;
    let currentGradesSum = 0;

    for (let judge = 1; judge <= judgesCount; judge++) {
        index++;
        let grade = Number(input[index]);

        currentGradesSum += grade;
    }
    let currentAverGrade = currentGradesSum / judgesCount;
    gradesSum += currentAverGrade;
    presentationsCount++;

    console.log(`${presentation} - ${currentAverGrade.toFixed(2)}.`);


    index++;
    command  = input[index];
}

let averageGrade = gradesSum / presentationsCount;

console.log(`Student's final assessment is ${averageGrade.toFixed(2)}.`)

}
//trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
//trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);
