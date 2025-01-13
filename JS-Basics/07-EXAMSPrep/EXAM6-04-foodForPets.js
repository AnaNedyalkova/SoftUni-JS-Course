function foodForPets (input) {
let index = 0;
let dayCount = Number(input[index]);
index++;

let totalFood = Number(input[index]);
index++;

let totalBiscuits = 0;
let totalEatenFood = 0;
let totalEatenFoodDog = 0;
let totalEatenFoodCat =0;

for (let day = 1; day <= dayCount; day++) {
    let dogFoodForDay = Number(input[index]);
    index++;

    let catFoodForDay = Number(input[index]);
    index++;

    let sumFood = dogFoodForDay + catFoodForDay;
    totalEatenFood += sumFood;
    totalEatenFoodDog += dogFoodForDay;
    totalEatenFoodCat += catFoodForDay;

    if (day % 3 === 0) {  // значи че сме на трети ден
        let biscuits = sumFood * 0.10;
        totalBiscuits += biscuits;
    }
}
let totalEatenFoodInP = totalEatenFood / totalFood * 100;
let totalEatenFoodDogP = totalEatenFoodDog / totalEatenFood * 100;
let totalEatenFoodCatP = totalEatenFoodCat / totalEatenFood * 100;

console.log(`Total eaten biscuits: ${Math.round(totalBiscuits)}gr.`)
console.log(`${totalEatenFoodInP.toFixed(2)}% of the food has been eaten.`)
console.log(`${totalEatenFoodDogP.toFixed(2)}% eaten from the dog.`);
console.log(`${totalEatenFoodCatP.toFixed(2)}% eaten from the cat.`);
}
foodForPets (["3",
    "500",
    "100",
    "30",
    "110",
    "25",
    "120",
    "35"]);