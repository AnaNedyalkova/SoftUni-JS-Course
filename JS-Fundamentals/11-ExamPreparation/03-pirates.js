// structure:
// {
//     city: { population: 4, gold: 50 },
//   }
function pirates(arr) {
    let citiesStats = {};

    let command = arr.shift();
    let city = command.split('||').shift();


    while (command !== 'Sail') {

        let [city, population, gold] = command.split('||');
        population = Number(population);
        gold = Number(gold);

        if (city in citiesStats) {
            citiesStats[city].population += population;
            citiesStats[city].gold += gold;
        } else {
            citiesStats[city] = { population, gold };
        }
        command = arr.shift();
    }

    let command2 = arr.shift();


    while (command2 !== 'End') {
        let tokens = command2.split('=>');
        let action = tokens.shift();
        let city = tokens[0];
        let currentCity = citiesStats[city];

        if (action == 'Plunder') {
            let people = Number(tokens[1]);
            let gold = Number(tokens[2]);

            currentCity.population -= people;
            currentCity.gold -= gold;

            
            if (currentCity.population <= 0 || currentCity.gold <= 0) {
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                console.log(`${city} has been wiped off the map!`);
                delete citiesStats[city];
            } else {

                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            }

        } else if (action == 'Prosper') {
            let gold = Number(tokens[1]);

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                currentCity.gold += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${currentCity.gold} gold.`);
            }
        }
        command2 = arr.shift();
    }

    let entries = Object.entries(citiesStats);

    if (entries.length <= 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        
            console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
        
            for (let [name, stats] of entries) {
        
                console.log(`${name} -> Population: ${stats.population} citizens, Gold: ${stats.gold} kg`);
            }
    }
}
pirates(['Nassau||95000||1000',
'San Juan||930000||1250',
'Campeche||270000||690',
'Port Royal||320000||1000',
'Port Royal||100000||2000',
'Sail',
'Prosper=>Port Royal=>-200',
'Plunder=>Nassau=>94000=>750',
'Plunder=>Nassau=>1000=>150',
'Plunder=>Campeche=>150000=>690',
'End'])
