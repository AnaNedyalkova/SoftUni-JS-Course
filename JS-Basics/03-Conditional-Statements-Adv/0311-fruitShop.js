function fruitShop(fruit, dayOfWeek, quantity) {
    price = 0;

    if (dayOfWeek == "Monday" || dayOfWeek == "Tuesday" || dayOfWeek == "Wednesday" || dayOfWeek == "Thursday" || dayOfWeek == "Friday") {
        switch (fruit) {
            case "banana":
                price = 2.50 * quantity;
                console.log(price.toFixed(2));
                break;
            case "apple":
                price = 1.20 * quantity;
                console.log(price.toFixed(2));
                break;
            case "orange":
                price = 0.85 * quantity;
                console.log(price.toFixed(2));
                break;
            case "grapefruit":
                price = 1.45 * quantity;
                console.log(price.toFixed(2));
                break;
            case "kiwi":
                price = 2.70 * quantity;
                console.log(price.toFixed(2));
                break;
            case "pineapple":
                price = 5.50 * quantity;
                console.log(price.toFixed(2));
                break;
            case "grapes":
                price = 3.85 * quantity;
                console.log(price.toFixed(2));
                break;
            default: console.log("error")
        }
    } else if (dayOfWeek == "Saturday" || dayOfWeek == "Sunday") {
        switch (fruit) {
            case "banana":
                price = 2.70 * quantity;
                console.log(price.toFixed(2));
                break;
            case "apple":
                price = 1.25 * quantity;
                console.log(price.toFixed(2));
                break;
            case "orange":
                price = 0.90 * quantity;
                console.log(price.toFixed(2));
                break;
            case "grapefruit":
                price = 1.60 * quantity;
                console.log(price.toFixed(2));
                break;
            case "kiwi":
                price = 3.00 * quantity;
                console.log(price.toFixed(2));
                break;
            case "pineapple":
                price = 5.60 * quantity;
                console.log(price.toFixed(2));
                break;
            case "grapes":
                price = 4.20 * quantity;
                console.log(price.toFixed(2));
                break;
            default: console.log("error")
        }
    } else {
        console.log("error")
    }
}
fruitShop("apple", "Tuesday", 2);
fruitShop("orange", "Sunday", 3);
fruitShop("kiwi", "Monday", 2.5);
fruitShop("grapes", "Saturday", 0.5);
fruitShop("tomato", "Monday", 0.5);