function netherRealms(str) {
    let demons = str.split(/\s*,\s*/); // moxe da ima space okolo ','
    let healthPattern = /[^0-9+\-*\/.]/g;
    let damagePattern = /[+-]?\d+(\.\d+)?/g;
    let specialSymbolsPattern = /\*|\//g;
    let demonsData = {};

    for (let demon of demons) {

        let healthMatches = demon.match(healthPattern);
        let health = 0;

        if (healthMatches) {
            for (let match of healthMatches) {
                let ascii = match.charCodeAt();
                health += ascii;
            }
        }

        let damageMatches = demon.match(damagePattern);
        let damage = 0;

        if (damageMatches) {
            for (let match of damageMatches) {
                damage += Number(match);
            }
        }

        let specialMatches = demon.match(specialSymbolsPattern);

        if (specialMatches) {
            for (let match of specialMatches) {
                if (match == '*') {
                    damage *= 2;
                } else if (match == '/') {
                    damage /= 2;
                }
            }
        }

        demonsData[demon] = {
            health: health,
            damage: damage
        };
    }

    let sortedDemons = Object.keys(demonsData).sort((a,b) => a.localeCompare(b));


    for (let demon of sortedDemons) {
        let demonData = demonsData[demon];

        console.log(`${demon} - ${demonData.health} health, ${demonData.damage.toFixed(2)} damage`)
    }
}
netherRealms('Gos/ho');