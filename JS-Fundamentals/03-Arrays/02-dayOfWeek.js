function dayOfWeek(day) {

    let days = ["Monday",
        "Tuesday",
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'];

        let result = day > days.length  || day < 0 ? `Invalid day!`: days[day - 1];
            console.log(result);


}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
