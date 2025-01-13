function cinemaTickets(input) {
    // TODO:
    // 1. Create helper variables
    // 1.1. Index
    // 1.2. Counter for ticket types
    // 2. While loop
    // 2.1. Updade index
    // 2.2. Get currentknown arguments
    // 2.3. Create current helper variables
    // 2.3.1. INDEX
    // 2.3.2. TIKCETS COunter
    // 2.4. While loop
    // 2.4.1. Update inner index
    // 2.4.2. Get current ticket type
    // 2.4.3. Updated tickets Counter
    // 2.4.4. Update ticket types Counters
    // 2.4.5. Handle no more seats
    // 2.5. Calculate seats percent
    // 2.6. Print movie results
    // 3. Calculate percents
    // 4. Print results

    let index = 0;
    let command = input[index];
    let standardTicketsCounter = 0;
    let studentsTicketsCounter = 0;
    let kidsTicketsCounte = 0;

    while (command !== 'Finish') {
        let movieTitle = command;
        index++;
        let availableSeats = Number(input[index]);

        index++;
        let innerCommand = input[index];
        let seatsTaken = 0;

        while (innerCommand !== 'End') {
            let ticketType = innerCommand;
            seatsTaken++;

            switch (ticketType) {
                case 'student': studentsTicketsCounter++;
                    break;
                case 'kid': kidsTicketsCounte++;
                    break;
                case 'standard': standardTicketsCounter++;
                    break
            }

            if (seatsTaken === availableSeats) {
                break;
            }

            index++;
            innerCommand = input[index];
        }

        let seatsTakenPercent = seatsTaken / availableSeats * 100;

        console.log(`${movieTitle} - ${seatsTakenPercent.toFixed(2)}% full.`);

        index++;
        command = input[index];
    }

    let ticketCount = kidsTicketsCounte + standardTicketsCounter + studentsTicketsCounter;
    let studentTicketsPercent = studentsTicketsCounter / ticketCount * 100;
    let standardTicketsPercent = standardTicketsCounter / ticketCount * 100;
    let kidTicketsPercent = kidsTicketsCounte / ticketCount * 100;

    console.log(`Total tickets: ${ticketCount}`);
    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`);

}
cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);