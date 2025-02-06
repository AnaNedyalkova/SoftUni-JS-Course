function orders(product, quantityN) {
    let quantity = Number(quantityN);
    
        let totalPrice = 0;
        switch (product) {
            case "water": totalPrice = quantity * 1.00; break;
            case "coffee": totalPrice = quantity * 1.50; break;
            case "coke": totalPrice = quantity * 1.40; break;
            case "snacks": totalPrice = quantity * 2.00; break;
        }
        return totalPrice.toFixed(2);
    
}
console.log(orders("coffee", 2));