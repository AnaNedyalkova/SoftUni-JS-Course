function sumFirstandLast(arr) {

    let first = Number(arr.shift());
    let last = Number(arr.pop());
    return first + last;
    

}
console.log(sumFirstandLast(['20', '30', '40']));