//Town name must be at least 3 characters!
//{Population/Area} must be a positive number!
//Town {town name} has population of {population} and area {area} square km.

function townInfo(town, population, area) {
//VErsion 1
    // if (town.length < 3) {
    //     console.log(`Town name must be at least 3 characters!`);
    // }

    // if (population <= 0) {
    //     console.log(`Population must be a positive number!`);
    // }

    // if (area <= 0) {
    //     console.log(`Area must be a positive number!`);
    // }

    // if (town.length >= 3 && population > 0 && area > 0) {
    //     console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
    // }

//Version 2 Using Booleans

let nameIsValid = town.length >= 3; // questions if name/population/area is valid
let populationIsValid = population > 0;
let areaIsValid = area > 0;

if (!nameIsValid) {
    console.log(`Town name must be at least 3 characters!`);
} 
if(!populationIsValid) {
    console.log(`Population must be a positive number!`);
}
if(!areaIsValid) {
    console.log(`Area must be a positive number!`);
}
if(nameIsValid && populationIsValid && areaIsValid) {
    console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
}


}
townInfo('Sofia', 1286383, 492);
townInfo('Ka', 3600, -50);
