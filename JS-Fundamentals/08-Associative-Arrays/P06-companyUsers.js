function companyUsers (arr) {
// стойността ще е масив с ID-ta
    let companyEmployees = {};

    for (let infoStr of arr){
        let [company, id] = infoStr.split(' -> ');

        if (company in companyEmployees) { //find the value as arr and push new element
            if(!companyEmployees[company].includes(id)){ // check if id is not there
                companyEmployees[company].push(id); //using push and icludes because companyEmployees[company] it's an array
            }
        } else {
            companyEmployees[company] = [id];  //add a new element in an empty array
        }
    }

    let entries = Object.entries(companyEmployees);
    entries.sort((a, b) => a[0].localeCompare(b[0]))

    for (let [name, list] of entries) {
        console.log(name)
        for (let id of list) {
            console.log(`-- ${id}`)
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);