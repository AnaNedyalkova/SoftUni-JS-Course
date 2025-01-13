function aquarium (length, width, height, percent) {

let tankVolume = length * width * height;
let tankVolumeInLitres = tankVolume / 1000;
let spaceTaken = percent / 100;
let totalWaterNeeded = tankVolumeInLitres * (1 - spaceTaken);


console.log(totalWaterNeeded)

}

aquarium(105, 77, 89, 18.5);