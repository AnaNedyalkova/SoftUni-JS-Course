function storeStudents(arr) {
    storeMap = new Map();

    for (let string of arr) {
        let tokens = string.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);
        

        if (!storeMap.has(name)) {
            storeMap.set(name, [])  //ading to the map the key and an empty array
        }
        for (let grade of grades) {
            let currentGrade = storeMap.get(name); //returns the empty array
            currentGrade.push(grade); //add the grade into it
        }
    }

    let sortedStore = Array.from(storeMap.entries());
    sortedStore.sort((a,b) => a[0].localeCompare(b[0]));
    //console.log(sortedStore)

    for (let el of sortedStore) {
        console.log(`${el[0]}: ${calculateAverage(el[1]).toFixed(2)}`);
    }

    function calculateAverage (arr) {
        let counter = 0;
        let sum = 0;
        for(let el of arr) {
            counter++;
            sum += el;
        }
        let average  = sum / counter;
        return average;
    }
}
storeStudents(
    ['Lilly 4 6 6 5',
        'Tim 5 6',
        'Tammy 2 4 3',
        'Tim 6 6']);