function addressBook(input) {
    let addressBook = {};
    //storring data in object
    for (let line of input) {
        let [name, street] = line.split(":");

        addressBook[name] = street;
    }
    //convert to Arr so it can be sorted
    let addressBookSorted = Object.entries(addressBook);
    addressBookSorted.sort(([nameA, streetA], [nameB, streetB]) => nameA.localeCompare(nameB))
    //deconstructing can be used as variable in loops
    for (let [name, street] of addressBookSorted) {
        console.log(`${name} -> ${street}`)
    }

}
addressBook(
    ['Tim:Doe Crossing',
        'Bill:Nelson Place',
        'Peter:Carlyle Ave',
        'Bill:Ornery Rd'])