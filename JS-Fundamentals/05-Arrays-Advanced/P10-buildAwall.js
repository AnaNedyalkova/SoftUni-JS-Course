function buildAwall(crews) {
    let arrConcretePerDay = [];
    let totalConcrete = 0;
    let validCrews = crews.filter((x) => x < 30);

    while (crews.some(sectionHeight => sectionHeight < 30)) {   //filtering crews lower than 30  
        let amountConcretePerDay = 0;

        for (let i = 0; i < crews.length; i++) {   

            if (crews[i] < 30) {
                crews[i]++;
                amountConcretePerDay += 195;
            }

        }
        arrConcretePerDay.push(amountConcretePerDay);
        totalConcrete += amountConcretePerDay;

    }

    let totalCost = totalConcrete * 1900;
    console.log(arrConcretePerDay.join(', '));
    console.log(`${totalCost} pesos`)

}
buildAwall([17, 22, 17, 19, 17]);