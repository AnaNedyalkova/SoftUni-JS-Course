function dayOfWeek(day) {

    let daysOfWeekArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (day >= 1 && day <= 7) {
        console.log(daysOfWeekArr[day -1])
        // switch (day) {
        //     case 1: console.log(daysOfWeekArr[0]);
        //     break;
        //     case 2: console.log(daysOfWeekArr[1]);
        //     break;
        //     case 3: console.log(daysOfWeekArr[2]);
        //     break;
        //     case 4: console.log(daysOfWeekArr[3]);
        //     break;
        //     case 5: console.log(daysOfWeekArr[4]);
        //     break;
        //     case 6: console.log(daysOfWeekArr[5]);
        //     break;
        //     case 7: console.log(daysOfWeekArr[6]);
        //     break;
        // }
    } else {
        console.log("Invalid day!");
    }

}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
