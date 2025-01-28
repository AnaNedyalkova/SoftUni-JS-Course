function arrayRotations (arr, rotationsCount) {

    for (let rotation = 1; rotation <= rotationsCount; rotation++){
        let firstElement = arr.shift();
        arr.push(firstElement);
    }
    console.log(arr.join(' '));

}

arrayRotations([51, 47, 32, 61, 21], 2);