function workingHours(hour, day) {
    if (hour >= 10 && hour <= 18) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open")
                break;
            default:
                console.log('closed');
        }
    } else {
        console.log("closed")
    }
}
workingHours(11, "Monday");
workingHours(19, "Friday");
workingHours(11, "Sunday");