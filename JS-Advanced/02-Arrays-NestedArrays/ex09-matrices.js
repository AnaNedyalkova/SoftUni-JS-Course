function matrices(data) {

    for (let i = 0; i < data.length - 1; i++) {
        let rowOne = data.reduce((acc, el) => acc + el[i], 0);
        let rowTwo = data.reduce((acc, el) => acc + el[i + 1], 0);
        let colOne = data[i].reduce((acc, el) => acc + el);
        let colTwo = data[i + 1].reduce((acc, el) => acc + el);

        if (rowOne !== rowTwo || colOne !== colTwo) {
            return false
        }
        return true
    }
}

console.log(matrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));