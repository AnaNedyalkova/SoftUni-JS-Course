function suppliesSchool (pens, markers, bleach, percent) {

    let pensTotal = pens * 5.8;
    let markersTotal = markers * 7.2;
    let bleachTotal = bleach * 1.2;
    let allMatTotal = pensTotal + bleachTotal + markersTotal;
    let percentConv = percent/100
    let finalPrice = allMatTotal - (allMatTotal*percentConv);
  
    console.log(finalPrice)

}

suppliesSchool (3, 2, 2, 12);