function destinationMapper(str) {
    let pattern = /(=|\/)(?<place>[A-Z][A-Za-z]{2,})\1/g;

    let matches = Array.from(str.matchAll(pattern));
    let places = [];
    let travelPoints = 0;

    for (let match of matches) {
        let name = match.groups.place;
        travelPoints += name.length;
        places.push(name);
    }

    console.log(`Destinations: ${places.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);

}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");