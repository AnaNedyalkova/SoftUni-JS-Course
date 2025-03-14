function starEnigma (arr) {
    let n = Number(arr.shift());

    let starPattern = /[star]/gi;
    let decriptedMessages = [];

    for (let currentMessage = 1; currentMessage <= n; currentMessage++) {
        let messageContent = arr.shift();
        let starMatches = messageContent.match(starPattern);
        let starMatchesCount = starMatches ? starMatches.length : 0;
        let decriptedMEssage = '';
        console.log(starMatches)

        for(let symbol of messageContent) {
            let originalAscii = symbol.charCodeAt();
            let newAscii = originalAscii - starMatchesCount;
            let newSymbol = String.fromCharCode(newAscii);
        }

        let planetPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>A|D)![^@\-!:>]*->(?<soldiers>\d+)/

        let attackedPlanet = [];
        let destroyedPlanet = [];

        for (let message of decriptedMessages) {
            let match = planetPattern.exec(message);

            if(match) {
                let planetName = match.groups.name;
                let typeAttack = match.groups.type;

                    if(type === 'D') {
                        destroyedPlanet.push(planetName);
                    } else {
                        attackedPlanet.push(planetName);
                    }
            }
        }

        console.log(`Attacked planets: ${attackedPlanet.length}`)
        attackedPlanet.sort((a,b) => a.localeCompare(b));
        attackedPlanet.forEach()
    }

}
starEnigma (['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);