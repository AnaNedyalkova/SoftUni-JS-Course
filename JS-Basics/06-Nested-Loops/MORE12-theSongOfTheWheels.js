function theSongOfTheWheels(controlNumber) {

    let counter = 0;
    let result = '';
    let pass = 0;

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {

                    if (a < b && c > d && a * b + c * d === controlNumber) {
                        counter++;
                        result += `${a}${b}${c}${d} `
                        
                    } else {
                        continue;
                    }
                    if (counter === 4) {
                        pass = `${a}${b}${c}${d}`
                    }
                }
            }  
        }
    }

    if (counter >= 4) {
    console.log(result);
    console.log(`Password: ${pass}`);
    
    } else if (counter < 4 && result !== "") {
        console.log(result);
        console.log(`No!`);
        
    } else {
        console.log(`No!`);
    }
}
theSongOfTheWheels(11);
theSongOfTheWheels(139);
theSongOfTheWheels(110);
theSongOfTheWheels(55);
