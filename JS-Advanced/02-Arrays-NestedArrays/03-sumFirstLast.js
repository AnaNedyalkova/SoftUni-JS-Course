function sumFirstLast (data) {
    let sum = Number(data.shift()) + Number(data.pop());
    console.log(sum);
}

sumFirstLast(['20', '30', '40'])