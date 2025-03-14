function netherRealms(str) {
    let demons = str.split(/\s*,\s*/); // moxe da ima space okolo ','
    let healthPattern = /[^0-9+\-*\/.]/g;
    let damagePattern = /[+-]?\d+(\.\d+)?/g;
    
    for (let demon of demons) {
        let healthMatches = demon.match(healthPattern);

        let health = 0;
        if(healthMatches) {
            for (let match of healthMatches) {
                let ascii = match.charCodeAt();
                health += ascii;
            }
        }

        let damage = 0;
        let damageMatches = demon.match(damagePattern);

        if(damageMatches) {
            for (let match of damageMatches) {
                damage += Number(match);
            }
        }

        console.log(damageMatches)
    }
    
}
netherRealms('M3ph1st0**, Azazel');