function formatGrade(grade) {
    let printGrade = formatNumber(grade);
    if (grade < 3) {
        console.log("Fail (2)");
    } else if (grade < 3.50) {
        console.log(`Poor (${printGrade})`);
    } else if (grade < 4.50) {
        console.log(`Good (${printGrade})`);
    } else if (grade < 5.50) {
        console.log(`Very good (${printGrade})`);
    } else if (grade >= 5.50) {
        console.log(`Excellent (${printGrade})`);
    }
}
function formatNumber(num){
    return num.toFixed(2);
}
formatGrade(3.33);