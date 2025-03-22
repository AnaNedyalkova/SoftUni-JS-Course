function secretChat(arr) {
    let message = arr.shift();

    let command = arr.shift();

    while (command !== 'Reveal') {
        let tokens = command.split(':|:');
        let action = tokens.shift();

        if (action === 'InsertSpace') {
            let index = Number(tokens.shift());
            message = message.substring(0, index) + ' ' + message.substring(index); // insert space at some index

        } else if (action === 'Reverse') {
            let substr = tokens.shift();

            if (message.includes(substr)) {
                message = message.replace(substr, '');  // easy way to cut part from a string
                let reversedSubstr = substr.split('').reverse().join(''); // easy way to reverse a string
                message += reversedSubstr; // add it to the end
            } else {
                console.log('error');
                command = arr.shift();
                continue;  // stop there , continue with the code from beginning
            }
        } else if (action === 'ChangeAll') {
            let [substring, replacement] = tokens;

            message = message.split(substring).join(replacement);  //same as the way below, replace all occurences with something else

            // while (message.includes(substring)) {
            //     message = message.replace(substring, replacement);
            // }
        }
        console.log(message);
        command = arr.shift();
    }

    console.log(`You have a new text message: ${message}`)
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);

