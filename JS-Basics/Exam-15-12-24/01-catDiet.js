function catDiet (fatsP, proteinsP, carboP, totalCalories, waterP) {

    let totalFats = (totalCalories * fatsP / 100) / 9;
    let totalProteins = (totalCalories * proteinsP / 100) / 4;
    let totalCarbo = (totalCalories * carboP / 100) / 4;
    
    let foodWeightTotal = totalCarbo + totalProteins + totalFats;

    let caloriesForOneGrFood = totalCalories / foodWeightTotal;
    
    let percentFood = 100 - waterP;

    let caloriesPerGramWithoutWater = caloriesForOneGrFood * percentFood / 100;

    console.log(caloriesPerGramWithoutWater.toFixed(4));
   

}
catDiet(60, 25, 15, 2500, 60)
catDiet(40, 40, 20, 3000, 40)
catDiet(20, 60, 20, 1800, 50)