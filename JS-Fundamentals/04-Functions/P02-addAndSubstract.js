function addAndSubstract(n1, n2, n3) {
    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    let firstTwoSum = sum(n1, n2);
    let result = subtract(firstTwoSum, n3);
    console.log(result);
}
addAndSubstract(23, 6, 10);