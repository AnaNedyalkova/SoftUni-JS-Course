function cookingByNumbers (arg1, ...params) {
    // create object with all action as functions 
    let opEnum = {
        'chop': (num) => num / 2,
        'dice': (num) => Math.sqrt(num),
        'spice': (num) => num + 1,
        'bake': (num) => num * 3,
        'fillet': (num) => num * 0.80,
    }

    let num = Number(arg1);

    for (let action of params) {
        num = opEnum[action](num);
        console.log(num);
    }  
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');