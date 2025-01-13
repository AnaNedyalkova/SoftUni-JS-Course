function yardGreening (a) {

    let totalareaprice = a * 7.61
    let discount = totalareaprice * 0.18
    let finalprice = totalareaprice - discount

    console.log(`The final price is: ${finalprice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening (550);