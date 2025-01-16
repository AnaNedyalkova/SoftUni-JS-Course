function amazingNumber(num) {

    //parse the number to string

    let numAsString = String(num);

    let sum = 0;

    for(let i =0; i < numAsString.length; i++) {
        sum+= Number(numAsString[i]);
    }

    let isAmazing = sum.toString().includes("9") ? "True" : "False"


    console.log(`${num} Amazing? ${isAmazing}`);


}
amazingNumber(1233);