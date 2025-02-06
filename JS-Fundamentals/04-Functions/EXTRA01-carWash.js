function carWash(arr) {

    let value = 0;

    let soap = x => x + 10;
    let water = x => x + x * 0.2;
    let vacuumCleaner = x => x + x * 0.25;
    let mud = x => x - x * 0.1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'soap') {
            value = soap(value);
        } else if (arr[i] === 'water') {
            value = water(value);
        } else if (arr[i] === 'vacuum cleaner') {
            value = vacuumCleaner(value);
        } else if (arr[i] === 'mud') {
            value = mud(value);
        }
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`)

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);