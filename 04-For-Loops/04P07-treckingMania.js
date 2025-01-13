// LIKE 3
function treckingMania(input) {

    let peopleMusala = 0;
    let peopleMonblanc = 0;
    let peopleKilimandjaro = 0;
    let peopleK2 = 0;
    let peopleEverest = 0;

    let n = input.length - 1;

    let allPeopleCount = 0;

    for (let i = 1; i <= n; i++) {
        let currentPeople = Number(input[i]);
        allPeopleCount+= currentPeople;
        
        if (currentPeople <= 5) {
            peopleMusala += currentPeople;
        } else if (currentPeople <= 12) {
            peopleMonblanc += currentPeople;
        } else if (currentPeople <= 25) {
            peopleKilimandjaro += currentPeople;
        } else if (currentPeople <= 40) {
            peopleK2+= currentPeople;
        } else {
            peopleEverest+= currentPeople;
        }
    }

    let percentMusala = peopleMusala / allPeopleCount * 100;
    let percentMonblanc = peopleMonblanc / allPeopleCount * 100;
    let percentKilim = peopleKilimandjaro / allPeopleCount * 100;
    let percentK2 = peopleK2 / allPeopleCount * 100;
    let percentEverest = peopleEverest / allPeopleCount * 100;

    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMonblanc.toFixed(2)}%`);
    console.log(`${percentKilim.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);

}
//treckingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
treckingMania(["5", "25", "41", "31", "250", "6"]);
