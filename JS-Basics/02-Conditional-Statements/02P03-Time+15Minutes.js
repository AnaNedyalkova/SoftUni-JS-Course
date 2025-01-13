function timePlus15Minutes (hour,minutes) {
let totalMinutes = (hour * 60) + minutes;
totalMinutes += 15;

let hours = Math.floor(totalMinutes / 60);
let newMinutes = totalMinutes % 60;

if (hours === 24) {
    hours = 0;
}

if (newMinutes < 10) {
console.log(`${hours}:0${newMinutes}`)
} else {
    console.log(`${hours}:${newMinutes}`)

}

}
timePlus15Minutes(1,46);
timePlus15Minutes(0,1);
timePlus15Minutes(23,59);
timePlus15Minutes(11,8);
timePlus15Minutes(12,49);