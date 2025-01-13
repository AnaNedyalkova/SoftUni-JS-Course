function challengeTheWedding(men, women, tablesMaxCount) {

    let result = '';
    let counter = 0;

    for (let m = 1; m <= men; m++) {
        for (let w = 1; w <= women; w++) {
            result += `(${m} <-> ${w}) `
            counter++;
            if (counter == tablesMaxCount) {
                break;
            }
        }
        if (counter == tablesMaxCount) {  //one more check added in the end because break will only exit from the current cicle
            break;
        }
    }
    console.log(result);
}
challengeTheWedding(5, 8, 40);