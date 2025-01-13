function  agencyProfit (companyName, adultsTicketsCount, kidsTicketsCount, adultTicketsPrice, servicePrice) {

    let kidsTicketPrice = adultTicketsPrice - (adultTicketsPrice * 0.70); 
    let adultTicketTotalPrice = adultTicketsPrice + servicePrice;
    let kidTicketTotalPrice = kidsTicketPrice + servicePrice;

    let allTicketsPrice = adultTicketTotalPrice * adultsTicketsCount + kidTicketTotalPrice * kidsTicketsCount;

    let profit = allTicketsPrice * 0.20; 
    console.log(`The profit of your agency from ${companyName} tickets is ${profit.toFixed(2)} lv.`);


}
agencyProfit ('WizzAir', 15, 5, 120, 40);