function bonusScore(initialPoints) {
let bonusPoints = 0;

if (initialPoints <= 100) {
    bonusPoints = 5;
    } else if (initialPoints <= 1000) {
    bonusPoints = initialPoints * 0.20;
    } else {
    bonusPoints = initialPoints * 0.10;
    }
if (initialPoints % 2 == 0) {
bonusPoints += 1;
    } else if (initialPoints % 10 == 5) {
    bonusPoints += 2;
    }
console.log(bonusPoints);
console.log(initialPoints + bonusPoints);
}
bonusScore(2703);
bonusScore(20);
bonusScore(175);