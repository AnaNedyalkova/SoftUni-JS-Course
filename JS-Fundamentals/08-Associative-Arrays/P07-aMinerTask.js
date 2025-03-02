function aMinerTask(arr) {
    let resourceQtys = {};
    
    // we need loop in couples - to take both resource and qty
    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let qty = Number(arr[i + 1]);

         if(resource in resourceQtys) {  //same as resourceQtys.hasOwnProperty(resources)
            resourceQtys[resource] += qty;
         } else {
            resourceQtys[resource] = qty;
         }
    }
    // turn into array and iterrate
    let entries = Object.entries(resourceQtys);
    
    for(let [resource, qty] of entries) {
        console.log(`${resource} -> ${qty}`)

    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])