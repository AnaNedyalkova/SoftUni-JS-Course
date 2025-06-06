function sameNumber(num) {
    let numString = num.toString();

    let firstElement = Number(numString[0]);
    let sum = firstElement;
    let isSame = true;

    for (let i = 1; i < numString.length; i++){
        let currentNum = Number(numString[i]);

        if(currentNum !== firstElement) {
            isSame = false;
        }
        sum += currentNum;
    }

    console.log(isSame);
    console.log(sum);
    
}
sameNumber(2222222);
sameNumber(1234);


function sameNumber02 (num1) {

    num1asString = num1.toString().split('');
    console.log(!num1asString.some((el, i, self) => {
        return el !== self[0]
    }))

    let sum = 0;
    num1asString.map(Number).forEach(el => sum += el );

    console.log(sum);
    
}
sameNumber02(2222222)