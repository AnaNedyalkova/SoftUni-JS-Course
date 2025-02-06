function listOfProducts(arr) {

    let orderdedList = arr.sort();

    for (let i = 0; i < orderdedList.length; i++) {
        console.log(`${i + 1}.${orderdedList[i]}`)
    }
}
listOfProducts(['Watermelon', 'Banana', 'Apples'])