function thePyramidOfKindDjoser(base, increment,) {

    let counter = 1;
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapisLazuli = 0;
    let totalGold = 0;

    let i = base;

    for (; i > 2; i = i - 2) {

        let cover = (4 * i - 4) * increment;
        let stone = (i - 2) * (i - 2) * increment;

        if (counter % 5 === 0) {
            totalLapisLazuli += cover;
        } else {
            totalMarble += cover;
        }

        totalStone += stone;
        counter++;

    }

    if (i === 1 || i === 2) {   // check if it's top gold 
        totalGold = i * i * increment;
    }

    let totalHeight = counter * increment;


    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHeight)}`);

}
thePyramidOfKindDjoser(11, 1);
//thePyramidOfKindDjoser(23, 0.5);