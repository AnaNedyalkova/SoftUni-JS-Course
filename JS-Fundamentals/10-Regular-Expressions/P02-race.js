function race (arr) {

    let patternLetters = /[A-Za-z]/g;  
    let patternDigits =  /\d/g;

    let racers = arr.shift().split(', ');
    let racersDistances = {};  // AssArr to store names with distances

    for (let name of racers) { //take every element of racers and add it to the AssArr
        racersDistances[name] = 0;
    }
    
    let command = arr.shift();
    
    while(command !== 'end of race') {
        let matchesLetters = command.match(patternLetters);  //pravi masiv ot bukvite
        let name = matchesLetters.join('');

        let matchesDigits = command.match(patternDigits);
        
        let distance = 0;

        for (let digit of matchesDigits){
            distance += Number(digit);
        }
        
        //check if the racer exists in our assArr, only if true add new distance to the racer
        if(name in racersDistances) {
            racersDistances[name] += distance;
        }
        command = arr.shift();
    }

    let entries = Object.entries(racersDistances);
    
    entries.sort((a,b) => b[1] - a[1]);
    console.log(`1st place: ${entries[0][0]}`);
    console.log(`2nd place: ${entries[1][0]}`);
    console.log(`3rd place: ${entries[2][0]}`);


}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);