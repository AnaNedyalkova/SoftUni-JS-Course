
function worldSwimRecord(worldRecordInSeconds, distanceInMeters, secondsForOneMeter) {
let ivanchoTimeInSeconds = distanceInMeters * secondsForOneMeter;
let slowingDown = Math.floor(distanceInMeters / 15) * 12.5; 
let ivanchoRealTime = ivanchoTimeInSeconds + slowingDown;
let diff = Math.abs(worldRecordInSeconds - ivanchoRealTime);

if(ivanchoRealTime < worldRecordInSeconds) {
    console.log(`Yes, he succeeded! The new world record is ${ivanchoRealTime.toFixed(2)} seconds.`);
} else {
    console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
}
}

worldSwimRecord(10464, 1500, 20);
worldSwimRecord(55555.67, 3017, 5.03);