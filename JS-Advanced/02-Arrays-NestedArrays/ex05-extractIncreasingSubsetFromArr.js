function extractIncreasingSubsetFromArr(data) {
    let result = [];

    result.push(data.shift());

    data.forEach(el => {
        if (el >= result[result.length - 1]) {
            result.push(el)
        }
    })

    return result;
}

function extractIncreasingSubsetFromArrV2 (data) {
    return data.reduce((acc, el) => {
        if(!acc.length) {
            acc.push(el);
            return acc;
        } else {
            return acc[acc.length -1] <= el ? acc.push(el) : acc;
        }
    }, [])
}

console.log(extractIncreasingSubsetFromArrV2([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));

console.log(extractIncreasingSubsetFromArrV2([20,
    3,
    2,
    15,
    6,
    1]));