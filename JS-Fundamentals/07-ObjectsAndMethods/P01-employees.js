function employees(arr) {
    for (let employeeName of arr) {
        let employeeObj = {name: employeeName, personalNum: employeeName.length};
        console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.personalNum}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);