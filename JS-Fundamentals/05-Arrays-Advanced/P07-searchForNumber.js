function searchForNumber(arr1, arr2) {

    let takeElCount = arr2.shift();
    let delElCount = arr2.shift();
    let searchEl = arr2.shift();

    let counter = 0;


        let takenEl = arr1.splice(0, takeElCount);
        takenEl.splice(0,delElCount);

        for (let el of takenEl) {
            if(el === searchEl) {
                counter++;
            }
        }

        return `Number ${searchEl} occurs ${counter} times.`

        
    
}
console.log(searchForNumber(
    [7, 1, 5, 8, 2, 7],
[3, 1, 5]
))