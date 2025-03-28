function worldTour (arr) {
    let stops = arr.shift();

    let command = arr.shift();

    while (command !== 'Travel') {

        let tokens = command.split(':');
        let action = tokens.shift();

        if (action == 'Add Stop') {
            let index = Number(tokens[0]);
            let string = tokens[1];
            //Insert the given string at that index only if the index is valid.
            if (index < stops.length) {
                stops = `${stops.slice(0,index)}${string}${stops.slice(index)}`
            }
            console.log(stops);

        } else if (action == 'Remove Stop') {
            let startIndex = Number(tokens[0]);
            let endIndex = Number(tokens[1]);
            
            //Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid.
            if (startIndex < stops.length && endIndex < stops.length) {
                let removedPart = stops.substring(startIndex, endIndex+1);
                stops = stops.replace(removedPart, '');
            }
            console.log(stops);

        } else if (action == 'Switch') {
            let oldString = tokens[0];
            let newString = tokens[1];
            //If the old string is in the initial string, replace it with the new one (all occurrences).
            if(stops.includes(oldString)) {
                stops = stops.split(oldString).join(newString);
            }
            console.log(stops);
        }

        command = arr.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`)

}
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"]); 