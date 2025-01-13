function depositCalc(a,b,c){


    let interest = a * c/100
    let oneMonth = interest / 12 
    let total = a + b * oneMonth

    console.log(total)
}
depositCalc(200, 3, 5.7);