function smallShop(arg1, arg2, arg3) {
    
    let product = arg1;
    let town = arg2;
    let quantity = Number(arg3);
    let money = 0;
    
    switch (town) {
        case "Sofia":
            if (product === "coffee") {
                money = quantity * 0.50;
            } else if (product === "water") {
                money = quantity * 0.80;
            } else if (product === "beer") {
                money = quantity * 1.20;
            } else if (product === "sweets") {
                money = quantity * 1.45;
            } else if (product === "peanuts") {
                money = quantity * 1.60;
            }
            break;

        case "Plovdiv":
            if (product === "coffee") {
                money = quantity * 0.40;
            } else if (product === "water") {
                money = quantity * 0.70;
            } else if (product === "beer") {
                money = quantity * 1.15;
            } else if (product === "sweets") {
                money = quantity * 1.30;
            } else if (product === "peanuts") {
                money = quantity * 1.50;
            }
            break;

        case "Varna":
            switch (product) {
                case "coffee": money = quantity * 0.45; break;
                case "water": money = quantity * 0.70; break;
                case "beer": money = quantity * 1.10; break;
                case "sweets": money = quantity * 1.35; break;
                case "peanuts": money = quantity * 1.55; break;
            }
            break;
    }

    console.log(money);
}
smallShop("coffee", "Varna", 2);
smallShop("peanuts", "Plovdiv", 1);
smallShop("beer", "Sofia", 2);
smallShop("water", "Plovdiv", 2);
smallShop("sweets", "Sofia", 2.23);


