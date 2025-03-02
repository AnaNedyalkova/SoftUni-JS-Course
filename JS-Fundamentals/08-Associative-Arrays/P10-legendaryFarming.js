function legendaryFarming(str) {
    let elements = str.split(' ');
    let keyMaterialQtys = { shards: 0, fragments: 0, motes: 0 };
    let junkMaterialQtys = {};

    let legendaryItems = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath'};

    // take elements by two 
    for (let i = 0; i < elements.length; i += 2) {
        let qty = Number(elements[i]); 
        let material = elements[i + 1].toLowerCase();

        // check if material is key or junk and add or create
        if (material in keyMaterialQtys) {
            keyMaterialQtys[material] += qty;
            //check qty is 250 or more
            if(keyMaterialQtys[material] >= 250) {
                keyMaterialQtys[material] -= 250;
                // check what item is obtained --> create ass array in the beginning (legendaryItems)
                let legendaryWon = legendaryItems[material];
                console.log(`${legendaryWon} obtained!`)
                break;
            }
        } else {
            if (material in junkMaterialQtys) {
                junkMaterialQtys[material] += qty; // add qty
            } else {
                junkMaterialQtys[material] = qty;  // create material
            }
        }
    }
  
    //sort the key Materials by 2 criteria
    let keyMaterialEntries = Object.entries(keyMaterialQtys);
    keyMaterialEntries.sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0])); 
    
    for (let [material, qty] of keyMaterialEntries) {
        console.log(`${material}: ${qty}`)

    }

    // sort the junkMaterials
    let junkMaterialEntries = Object.entries(junkMaterialQtys);
    junkMaterialEntries.sort((a,b) => a[0].localeCompare(b[0])); 
    
    for (let [material, qty] of junkMaterialEntries) {
        console.log(`${material}: ${qty}`)

    }
}
legendaryFarming(
    '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');