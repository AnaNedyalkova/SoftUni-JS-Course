function listOfName(data) {

    return data.sort((a, b) => a.localeCompare(b))
    .forEach((el, i) => console.log(`${i + 1}.${el}`));
    

}
listOfName(["John", "Bob", "Christina", "Ema"]);