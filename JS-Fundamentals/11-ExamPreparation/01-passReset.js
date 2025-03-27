function passReset(arr) {
    let newPass = arr.shift();

    let action = '';
    do {
        let tokens = arr.shift().split(' ');
        action = tokens[0];

        if (action === 'TakeOdd') {
            let currPass = '';
            for (let i = 0; i < newPass.length; i++) {
                if (i % 2 !== 0) {
                    currPass += newPass[i];
                }
            }
            newPass = currPass;
            console.log(newPass);

        } else if (action === 'Cut') {
            let [_, index, length] = tokens;
            index = Number(index);
            length = Number(length);
            let substr = newPass.substring(index, index+length);
            newPass = newPass.replace(substr, '');
            console.log(newPass);
            
        } else if (action === 'Substitute') {
            let [_, substr, substitude] = tokens;
    
            if (newPass.indexOf(substr) === -1) {
                console.log('Nothing to replace!');
            } else {
                    newPass = newPass.split(substr).join(substitude);
                    console.log(newPass);
            }           
        }
    } while (action !== 'Done');
    
    console.log(`Your password is: ${newPass}`);
}
passReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);
