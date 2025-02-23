function towns(arr) {
    for (let townStr of arr) {
        let [townName, townLatitude, townLongitude] = townStr.split(' | ');
        townLatitude = Number(townLatitude).toFixed(2); //-> връща string
        townLongitude = Number(townLongitude).toFixed(2);

        let townObj = {
            town: townName,
            latitude: townLatitude,
            longitude: townLongitude,
        }
        console.log(townObj)
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);