function positiveNnegative (arr) {
    let result = [];

    for (let num of arr){
        let currentNum = Number(num);

        num < 0 ? result.unshift(num) : result.push(num); // OR with if/else

        // if(num < 0) {
        //     result.unshift(num);
        // } else {
        //     result.push(num);
        // }
 }
 return result.join('\n');
}
console.log(positiveNnegative(['7', '-2', '8', '9'])) ;
