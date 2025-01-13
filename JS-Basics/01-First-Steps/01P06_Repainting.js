function repainting (nylonNeeded, paintNeeded, thinnerNeeded, hoursNeeded) {
//CountMaterialCost
let nylonTotal = (nylonNeeded +2) * 1.5;
let thinnerTotal = thinnerNeeded * 5;

let extraPaint = paintNeeded * 0.10; 
let paintTotal = (paintNeeded + extraPaint) * 14.5;

//AllMaterials
let totalAllMaterials = nylonTotal + thinnerTotal + paintTotal + 0.4;

//CountWorkCost
let ratePerHourTotal = totalAllMaterials*0.3;
let chargeTotal = ratePerHourTotal * hoursNeeded;

let allExpenses = totalAllMaterials + chargeTotal;

console.log(allExpenses)


}

repainting (10, 11, 4, 8);