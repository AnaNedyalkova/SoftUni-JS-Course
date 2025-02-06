function pointsValidation(arr) {

    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    let distanceOne = calculateDistance(x1, y1, 0, 0);
    let distanceTwo = calculateDistance(x2, y2, 0, 0);
    let distanceThree = calculateDistance(x1, y1, x2, y2);


    if (distanceOne % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else { 
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (distanceTwo % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else { 
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (distanceThree % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else { 
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }


}
pointsValidation([3, 0, 0, 4])
