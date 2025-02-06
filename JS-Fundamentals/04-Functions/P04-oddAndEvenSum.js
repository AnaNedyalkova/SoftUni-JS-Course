function oddAndEvenSum(n) {

    function sumEvenNumbers(num){
        let numStr = num + '';
        let sum = 0;

        for (let i = 0; i < numStr.length; i++) {
            if(Number(numStr[i]) % 2 === 0) {
                sum += Number(numStr[i]);
            }
        }
        return sum;
    }
    function sumOddNumbers(num){
        let numStr = num + '';
        let sum = 0;

        for (let i = 0; i < numStr.length; i++) {
            if(Number(numStr[i]) % 2 !== 0) {
                sum += Number(numStr[i]);
            }
        }
        return sum;

    }

    
    console.log(`Odd sum = ${sumOddNumbers(n)}, Even sum = ${sumEvenNumbers(n)}`)


}
oddAndEvenSum(3495892137259234);