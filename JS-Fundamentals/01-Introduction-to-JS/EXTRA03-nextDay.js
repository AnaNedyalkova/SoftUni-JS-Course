// function nextDay(year, month, day) {
//     let nextDay = new Date(year, month - 1, day + 1);

//     let newYear = nextDay.getFullYear();
//     let newMonth = nextDay.getMonth() + 1;
//     let newDate = nextDay.getDate();

//     console.log(`${newYear}-${newMonth}-${newDate}`);
// }


function nextDay (n1,n2,n3) {
    let year = Number(n1);
    let month = Number(n2);
    let day = Number(n3);

    let nextDate = new Date (year, month -1, day + 1);
    console.log(`${nextDate.getFullYear()}-${nextDate.getMonth()+1}-${nextDate.getDate()}`);
}
nextDay(2020,3,24);