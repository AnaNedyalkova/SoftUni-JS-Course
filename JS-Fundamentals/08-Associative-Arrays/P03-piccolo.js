function piccolo(arr) {

    let parkingLot = new Set();

    while (arr.length > 0) {
        let line = arr.shift();
        let tokens = line.split(', ');
        let action = tokens.shift();
        let carNumber = tokens.shift();

        if (action === 'IN') {
            parkingLot.add(carNumber);
        } else if (parkingLot.has(carNumber) && action === 'OUT') {
            parkingLot.delete(carNumber);
        }
    }
    if (parkingLot.size <= 0) {
        console.log(`Parking Lot is Empty`)
    }

    let sorted = Array.from(parkingLot.keys()).sort((a,b) => a.localeCompare(b));

    for (number of sorted) {
        console.log(number)
    }
}
piccolo(
    ['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'OUT, CA1234TA']);