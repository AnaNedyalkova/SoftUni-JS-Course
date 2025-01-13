  //TODO
  // 1. Calculate seats
  // 2. Calculate profit
  // 3. Print result

  function cinema (projectionType, rowsCount, columnsCount) {
    let seatsCount =  rowsCount * columnsCount;
    let profit = 0;

    switch (projectionType){
        case 'Premiere' :
            profit = seatsCount * 12;
            break;
        case 'Normal' :
            profit = seatsCount * 7.50;
            break;
        case 'Discount' :
            profit = seatsCount * 5;
            break;
    }

    console.log(`${profit.toFixed(2)} leva`);

  }
  cinema("Premiere", 10, 12);
  cinema("Normal", 21, 13);
  cinema("Discount", 12, 30);
