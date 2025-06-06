function roadRadar(speed, area) {

    let speedLimit = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }

    let currentSpeed = Number(speed);

    if (speedLimit[area] < currentSpeed) {
        let diff = Math.abs(speedLimit[area] - speed)
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit[area]} - ${calculateCurrentStatus(diff)}`);
    } else {
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimit[area]} zone`);
    }

    function calculateCurrentStatus (speedDiff) {
        if (speedDiff <= 20) {
            return 'speeding';
        } else if (speedDiff <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}
roadRadar(21, 'residential');