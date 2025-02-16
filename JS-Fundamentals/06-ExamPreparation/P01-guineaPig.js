// `Everything is fine! Puppy is happy! Food: ${excessFood}, Hay: ${excessHay}, Cover: ${excessCover}.`
// `Merry must go to the pet store!`
function guineaPig (arr) {
let foodQty = Number(arr.shift()) * 1000;
let hayQty = Number(arr.shift()) * 1000;
let coverQty = Number(arr.shift()) * 1000;
let weight = Number(arr.shift()) * 1000;

for (let day = 1; day <= 30; day++){
    foodQty -= 300;

    if( day % 2 === 0){
        hayQty -= 0.05 * foodQty;
    }
    if( day % 3 === 0){
        coverQty -= (1 / 3) * weight;
    }

    if (foodQty <= 0 || hayQty <= 0 || coverQty <= 0) {
        console.log(`Merry must go to the pet store!`);
        return;
    }
 }

 let foodQtyKg = foodQty / 1000;
 let hayQtyKg = hayQty / 1000;
 let coverQtyKg = coverQty / 1000;

 console.log(`Everything is fine! Puppy is happy! Food: ${foodQtyKg.toFixed(2)}, Hay: ${hayQtyKg.toFixed(2)}, Cover: ${coverQtyKg.toFixed(2)}.`)

}

guineaPig((
    ["10",
    "5",
    "5.2", 
    "1"]));