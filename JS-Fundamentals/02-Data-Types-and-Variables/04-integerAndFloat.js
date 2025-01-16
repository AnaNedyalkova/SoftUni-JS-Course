function integerAndFloat(n1,n2,n3) {

    let sum = n1 + n2 + n3;


    // % 1 checks if the number is float or int
    // or use method Number.isInteger(sum) ? etc
    let result = sum % 1 === 0 ? `${sum} - Integer`: `${sum} - Float`; 


    console.log(result);

}


integerAndFloat(9, 100, 1.1);