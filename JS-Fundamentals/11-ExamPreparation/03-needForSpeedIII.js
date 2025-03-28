// structure:
// {
//     car: { mileage: 700, fuel: 30 },
//     ca2: { mileage: 300, fuel: 60 },
//   }
function needForSpeedIII(arr) {

    let n = Number(arr.shift());
    let carStats = {};

    for (let i = 0; i < n; i++) {
        [car, mileage, fuel] = arr.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
        carStats[car] = { mileage, fuel };
    }

    let command = arr.shift();

    while (command !== 'Stop') {

        let tokens = command.split(' : ');
        let action = tokens.shift();
        let name = tokens.shift();
        let currentCar = carStats[name];

        if (action == 'Drive') {
            let distance = Number(tokens[0]);
            let fuel = Number(tokens[1]);

            if (currentCar.fuel >= fuel) {
                currentCar.mileage += distance;
                currentCar.fuel -= fuel;
                console.log(`${name} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                if (currentCar.mileage >= 100000) {
                    console.log(`Time to sell the ${name}!`);
                    delete carStats[name];
                }
            } else {
                console.log(`Not enough fuel to make that ride`);
            }

        } else if (action == 'Refuel') {
            let fuel = Number(tokens[0]);
            let oldFuel = currentCar.fuel;
            currentCar.fuel += fuel;
            if (currentCar.fuel > 75) {
                currentCar.fuel = 75;
            }
            console.log(`${name} refueled with ${currentCar.fuel - oldFuel} liters`);
            
        } else if (action == 'Revert') {
            let kilometers = Number(tokens[0]);

            currentCar.mileage -= kilometers;

            if (currentCar.mileage < 10000) {
                currentCar.mileage = 10000;
            } else {
                console.log(`${name} mileage decreased by ${kilometers} kilometers`);
            }
        }
        command = arr.shift();
    }

    let entries = Object.entries(carStats);

    for (let [name, {mileage, fuel}] of entries) {
        console.log(`${name} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`)
    }

}
needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]);