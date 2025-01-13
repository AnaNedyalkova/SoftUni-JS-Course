// DOTO
// 1. Calculate lunch time x
// 2. Calculate rest time x
// 3. Calculate leftover time x
// 4. Print
 // 4.1. Break is enough for lunch , rest and series x
 // 4.2. Break is NOT enough


function lunchBreak(seriesName,episodeLength,breakLength) {
let lunchTime = breakLength / 8;
let restTime = breakLength / 4;
let leftoverTime = breakLength - lunchTime - restTime;

let diff = Math.abs(leftoverTime - episodeLength); 
if (leftoverTime >= episodeLength) {
console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(diff)} minutes free time.`)
    } else {
    console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(diff)} more minutes.`)
    }
}
lunchBreak("Game of Thrones", 60, 96);
lunchBreak("Teen Wolf", 48, 60);
