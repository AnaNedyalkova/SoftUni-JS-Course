function foodDelivery(chickenMenus, fishMenus, veggieMenus) {

    let chickenMenusPrice = chickenMenus * 10.35;
    let fishMenusPrice = fishMenus * 12.40;
    let veggieMenusPrice = veggieMenus * 8.15;
    let totalPrice = chickenMenusPrice + fishMenusPrice + veggieMenusPrice;

    let desertPrice = totalPrice * 0.2;

    let allDeliveryPrice = totalPrice + desertPrice + 2.5;


    console.log(allDeliveryPrice);
}

foodDelivery (5, 3, 2);