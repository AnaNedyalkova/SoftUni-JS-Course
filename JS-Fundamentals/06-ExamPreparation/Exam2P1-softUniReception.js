function softUniReception(arr) {
    let p1CapacityPerHour = Number(arr.shift());
    let p2CapacityPerHour = Number(arr.shift());
    let p3CapacityPerHour = Number(arr.shift());
    let studentCount = Number(arr.shift());
    let counter = 0;

    while (studentCount > 0) {
        counter ++;
        if (counter % 4  === 0){
            continue;
        }
        studentCount -= p1CapacityPerHour + p2CapacityPerHour + p3CapacityPerHour;
    }
    console.log(`Time needed: ${counter}h.`)
}
softUniReception(
    ['3','2','5','40'])