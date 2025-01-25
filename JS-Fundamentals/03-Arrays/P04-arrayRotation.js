function arrayRotations (arr, rotationsCount) {
    for (let currentRotation = 1; currentRotation <= rotationsCount; currentRotation++){
        let firstElement = arr.shift();
        arr.push(firstElement);
    }
    console.log(arr.join(' '));
}

arrayRotations([51, 47, 32, 61, 21], 2);