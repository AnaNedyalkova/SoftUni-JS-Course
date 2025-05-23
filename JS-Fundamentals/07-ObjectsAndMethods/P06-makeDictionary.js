function makeDictionary(jsonString) {
    let dictionary = {};

    for (let term of jsonString) {
        let termObject = JSON.parse(term);
        dictionary[Object.keys(termObject)[0]] = Object.values(termObject)[0]
        console.log(Object.entries(dictionary))
    }
    for([key,value] of Object.entries(dictionary).sort()) {
        //console.log(`Term: ${key} => Definition: ${value}`)
    }

}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);