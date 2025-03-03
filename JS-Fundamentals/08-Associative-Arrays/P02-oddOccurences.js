function oddOccurences(str) {
    let strToArr = str.split(' ')
    let allElements = {};
    let oddElements = [];

    for (let el of strToArr) {
        let element = el.toLowerCase();
        if (!(element in allElements)) {
            let count = 1;
            allElements[element] = count;
        } else {
            allElements[element]++;
        }
    }

    let values = Object.entries(allElements);
    for (let numbers of values) {
        //console.log(numbers)
        if (numbers[1] % 2 !== 0) {
            oddElements.push(numbers[0]);
        }
    }

    console.log(oddElements.join(' '))

}
oddOccurences('Cake IS SWEET is Soft CAKE sweet Food');
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');