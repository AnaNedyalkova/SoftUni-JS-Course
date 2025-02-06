function firstAndLastKnumbers(arr) {
    let k = Number(arr.shift()); // remove the first element
    let partOne = arr.slice(0, k); // here we have start and end
    let partTwo = arr.slice(arr.length - k); // here we have only start (got back to where we left)

    console.log(partOne.join(' '));
    console.log(partTwo.join(' '));

}
firstAndLastKnumbers([3,6, 7, 8, 9]);