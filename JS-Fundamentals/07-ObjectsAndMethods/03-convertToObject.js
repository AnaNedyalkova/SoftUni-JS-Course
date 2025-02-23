function convertToObject(strJSON) {
    let myObj = JSON.parse(strJSON);

    for (let [key, value] of Object.entries(myObj)) {
        console.log(`${key}: ${value}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');