// structure:
// {
//     Arnoldii: { rarity: 4, ratings: [] },
//     Woodii: { rarity: 5, ratings: [ 10, 5 ] },
//     Welwitschia: { rarity: 2, ratings: [ 7 ] }
//   }

function plantDiscovery(arr) {
    let n = Number(arr.shift());
    let plantStats = {};

    for (let i = 1; i <= n; i++) {
        let [plant, rarity] = arr.shift().split('<->');
        rarity = Number(rarity);

        if (plant in plantStats) {
            plantStats[plant].rarity = rarity;
        } else {
            plantStats[plant] = { rarity, ratings: [] }
        }
    }

    let command = arr.shift();

    while (command !== 'Exhibition') {
        let [action, plantInfo] = command.split(': ');
        let [name, value] = plantInfo.split(' - ');
        value = Number(value);

        if (action == 'Rate') {

            if (name in plantStats) {
                plantStats[name].ratings.push(value);
            } else {
                console.log('error');
            }

        } else if (action == 'Update') {

            if (name in plantStats) {
                plantStats[name].rarity = value;
            } else {
                console.log('error');
            }

        }
        else if (action == 'Reset') {

            if (name in plantStats) {
                plantStats[name].ratings = [];
            } else {
                console.log('error');
            }

        }
        command = arr.shift();
    }

    console.log(`Plants for the exhibition:`);

    let entries = Object.entries(plantStats);

    for (let [name, stats] of entries) {

        let sum = 0;
        for (let rating of stats.ratings) {
            sum += rating;

        }

        let avgRating = stats.ratings.length === 0 ? 0 : sum / stats.ratings.length;

        console.log(`- ${name}; Rarity: ${stats.rarity}; Rating: ${avgRating.toFixed(2)}`);
    }

}
plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]));
