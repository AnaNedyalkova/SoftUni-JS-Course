function requiredReading(numPages, pageReadInHour, deadlineDays) {

    let totalTime = numPages / pageReadInHour;
    let numHoursPerDay = totalTime / deadlineDays;

    console.log(numHoursPerDay); 
}
requiredReading(212,20,2);