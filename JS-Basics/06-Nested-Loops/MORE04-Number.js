function number (startNumber, endNumber) { 
    
    let result = '';

    for (let n1 = startNumber; n1 <= endNumber; n1++) {

        for (let n2 = startNumber; n2 <= endNumber; n2++) {

            for (let n3 = startNumber; n3 <= endNumber; n3++) {
                if ((n2 + n3) % 2 !== 0) {
                    continue;
                }
                for (let n4 = startNumber; n4 <= endNumber; n4++) {
                    
                    if (n1 < n4) {       
                        continue;
                    } else if (n1 % 2 === 0 && n4 % 2 !== 0) {
                        result += `${n1}${n2}${n3}${n4} `
                    } else if (n1 % 2 !== 0 && n4 % 2 === 0) {
                        result += `${n1}${n2}${n3}${n4} `
                    } else {
                        continue;
                    }
                }
        
            }
        
        }
    }
    console.log(result);

}
number(5, 8);
