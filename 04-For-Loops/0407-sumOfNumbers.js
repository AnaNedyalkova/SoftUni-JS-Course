function sumOfNumbers (arg) {
 
    let sum = 0;

    for (let i =0; i < arg.length; i++) {
    sum += Number(arg[i]);

    }
    console.log(`The sum of the digits is:${sum}`);
   
}
sumOfNumbers('1234');
sumOfNumbers("564891");