function vacationBookList (pagesAll, pagesPerHour, mustCompleteDays){

    let totaldays = pagesAll / pagesPerHour
    let hoursPerDay = totaldays / mustCompleteDays

    console.log(hoursPerDay)
}

vacationBookList (150, 10, 5)