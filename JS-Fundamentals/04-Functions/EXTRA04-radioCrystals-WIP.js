function radioCrystals(arr) {

    let targetThickness = arr.shift();
    
    for (let i = 0; i < arr.length; i++) {

        let cut = (x) => x / 4;
        let lap = (x) => x - (x * 0.2);
        let grind = (x) => x - 20;
        let etch = (x) => x - 2;
        let xRay = (x) => x + 1;

        function transportNwashing(x) {
            console.log('Transporting and washing');
            return Math.floor(x);
        }
        let cutCounter = 0;
        let lapCounter = 0;
        let grindCounter = 0;
        let etchCounter = 0;

        let currentThickness = arr[i];

        console.log(`Processing chunk ${currentThickness} microns`);

        while (cut(currentThickness) >= targetThickness) {
            currentThickness = cut(currentThickness);
            cutCounter++;
        }

        console.log(`Cut x${cutCounter}`);
        currentThickness = transportNwashing(currentThickness);

        if (currentThickness === targetThickness) {
            console.log(`Finished crystal ${currentThickness} microns`);
            continue;
        }

        while (lap(currentThickness) > targetThickness) {
            currentThickness = lap(currentThickness);
            lapCounter++;
        }

        console.log(`Lap x${lapCounter}`);
        currentThickness = transportNwashing(currentThickness);

        if (currentThickness === targetThickness) {
            console.log(`Finished crystal ${currentThickness} microns`);
            continue;
        }

        while (grind(currentThickness) >= targetThickness) {
            currentThickness = grind(currentThickness);
            grindCounter++;
        }

        console.log(`Grind x${grindCounter}`);
        currentThickness = transportNwashing(currentThickness);

        if (currentThickness == targetThickness) {
            console.log(`Finished crystal ${currentThickness} microns`);
            continue;
        }

        while (etch(currentThickness) > etch(targetThickness)) {
            currentThickness = etch(currentThickness);
            etchCounter++;
        }
        console.log(`Etch x${etchCounter}`);
        currentThickness = transportNwashing(currentThickness);

        if (currentThickness < targetThickness) {
            currentThickness = xRay(currentThickness);
            console.log(`X-ray x1`);
        }

        console.log(`Finished crystal ${currentThickness} microns`);
    }
}

radioCrystals([1000, 4000, 8100]);
radioCrystals([1375, 50000]);