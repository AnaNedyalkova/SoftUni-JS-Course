function weekendOrWorkday(day) {
    
    switch (day) {
        case "Monday" :
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday": console.log("Working day"); break;
        case "Saturday":
        case "Sunday": console.log("Weekend"); break;
        default : console.log("Error");
    }
}
weekendOrWorkday ("Sunday");
weekendOrWorkday ("Friday");
weekendOrWorkday ("Frdgdgiday");

