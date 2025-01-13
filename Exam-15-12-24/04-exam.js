function exam (input) {
let index = 0;

let studentsCount = Number(input[index]);
index++;

let topGrades = 0;
let between4and5 = 0;
let between3And4 = 0;
let failGrades = 0;

let sumGrades = 0;


for (let i = 1; i <= studentsCount; i++) {
    let currentGrade = Number(input[index]);
    index++
    if (currentGrade >= 5) {
        topGrades++;
        sumGrades += currentGrade;
    } else if (currentGrade >= 4 && currentGrade <= 4.99) {
        between4and5++;
        sumGrades += currentGrade;
    } else if (currentGrade >= 3 && currentGrade <= 3.99) {
        between3And4++;
        sumGrades += currentGrade;
    } else if (currentGrade < 3) {
        failGrades++;
        sumGrades += currentGrade;
    }
}

let topGradesPercent = topGrades / studentsCount * 100;
let between3And4Percent = between3And4 / studentsCount * 100;
let between4and5Percent = between4and5 / studentsCount * 100;
let failGradesPercent = failGrades / studentsCount * 100;

let averageScore = sumGrades / studentsCount;

console.log(`Top students: ${topGradesPercent.toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${between4and5Percent.toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${between3And4Percent.toFixed(2)}%`);
console.log(`Fail: ${failGradesPercent.toFixed(2)}%`);
console.log(`Average: ${averageScore.toFixed(2)}`);

}
exam(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
exam(["6", "2", "3", "4", "5", "6", "2.2"]);