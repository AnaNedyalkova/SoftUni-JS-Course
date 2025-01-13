    // TODO:
    // 1. Handle helper variables - x
    // 2. For loop - x
    // 2.1. Handle even and odd birdays - x
    // 3. Calculate money saved - x
    // 4. print results - 
    // 4.1. enoung money for washing machine
    // 4.2. NOT enoung money for washing machine

    function cleverLily(age, washingMachinePrice, toyPrice) {

    let moneySaved = 0;
    let birthdayMoney = 10;
    let toysCount = 0;

    for (let birthday = 1; birthday <= age; birthday++) {
        if (birthday % 2 === 0) {
            moneySaved += birthdayMoney - 1;
            birthdayMoney += 10;
        } else {
            toysCount++;
        }
    }

    let moneyFromToys = toysCount * toyPrice;
    let totalAmount = moneySaved + moneyFromToys;

    let diff = Math.abs(washingMachinePrice - totalAmount);

    if (totalAmount >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }

}
cleverLily(10, 170.00, 6);
cleverLily(21, 1570.98, 3);