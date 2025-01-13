function foreignLanguagues(countryName) {

    if (countryName === 'USA' || countryName === 'England') {
        console.log("English");
    } else if (countryName === 'Spain' || countryName === 'Argentina' || countryName === 'Mexico') {
        console.log("Spanish")
    } else {
        console.log("unknown")
    }
}
foreignLanguagues('USA');
foreignLanguagues('Germany');
