function magicSum(arr, targetSum) {
    for(let i = 0; i < arr.length; i++) { //minava prez vsichki chisla
        for(let j = i +1 ; j < arr.length; j++) {  //minava vsiqchki chisl;a  nadqsno
            let num1 = arr[i];
            let num2 = arr[j];

            if(num1 + num2 === targetSum) {
                console.log(`${num1} ${num2}`);
            }

        }
    }
}
magicSum([1, 7, 6, 2, 19, 23],
    8);