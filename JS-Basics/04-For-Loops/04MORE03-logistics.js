function logistics(input) {
    let cargoCount = Number(input[0]);
    let cargoPriceAverage = 0;
    let microbus = 0;
    let truck = 0;
    let train = 0;
    let sum = 0;
    let levaPerTonMicrobus = 200;
    let levaPerTonTruck = 175;
    let levaPerTonTrain = 120;

    for (i = 1; i <= cargoCount; i++) {
        let currentTonsCargo = Number(input[i]);
        sum += Number(input[i]);

        if (currentTonsCargo <= 3) {
            microbus += Number(input[i]);

        } else if (currentTonsCargo >= 4 && currentTonsCargo <= 11) {
            truck += Number(input[i]);
        } else {
            train += Number(input[i]);
        }
    
    } 
    cargoPriceAverage = (microbus * levaPerTonMicrobus + truck * levaPerTonTruck + train * levaPerTonTrain) / sum;
    
 
    let percentMicrobus = microbus / sum * 100;
    let percentTruck = truck / sum * 100;
    let percentTrain = train / sum * 100;

    console.log(cargoPriceAverage.toFixed(2));
    console.log(percentMicrobus.toFixed(2) + '%');
    console.log(percentTruck.toFixed(2) + '%');
    console.log(percentTrain.toFixed(2) + '%');
}
//logistics(["4", "1", "5", "16", "3"]);
logistics(["5", "2", "10", "20", "1", "7"]);