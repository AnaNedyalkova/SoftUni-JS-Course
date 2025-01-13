function sleepyTomCat(numberDaysOff) {
let normPlayForOneYearInMinutes = 30000;
let numberWorkingDays = 365 - numberDaysOff;

let playPerWorkingDay = 63;
let playPerOffDay = 127;

let workingDaysPlay = numberWorkingDays * playPerWorkingDay;
let daysOffPlay = numberDaysOff * playPerOffDay;
let totalPlayTime = workingDaysPlay + daysOffPlay;

let diff = Math.abs(totalPlayTime - normPlayForOneYearInMinutes);
let hours = Math.floor(diff / 60);
let minutes = diff % 60;

    if (totalPlayTime > normPlayForOneYearInMinutes) {
        console.log(`Tom will run away`);
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
 
}
sleepyTomCat(20);
sleepyTomCat(113);