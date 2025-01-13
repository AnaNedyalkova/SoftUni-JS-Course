//TODO
// 1. Calculate exam as time in minutes 
// 2. Calculate arrival as time in minutes
// 3. Handle arrival
// 3.1. Before exam
// 3.1.1. On time
// 3.1.2. Early
// 3.1.3. Print
// 3.1.3.1 Less than an hour before exam
// 3.1.3.2. More than an hour before exam
// 3.1.3.2.1. Print minutes with leading zero
// 3.1.3.2.2. Print minutes and hours
// 3.2. Late
// 3.2.1. Less than an hour after exam
// 3.2.2. More than an hour after exam
// 3.2.1. Print minutes with leading zero
// 3.2.2. Print minutes and hours

function onTimeForExam(examHour, examMinute, arrivalHour, arrivalMinute) {

    let examTime = (examHour * 60) + examMinute;
    let arrivalTime = (arrivalHour * 60) + arrivalMinute;

    if (arrivalTime <= examTime) {
        let timeEarly = examTime - arrivalTime;
        if (timeEarly <= 30) {
            console.log('On time');
        } else {
            console.log('Early');
        }
        if (timeEarly < 60) {
            console.log(`${timeEarly} minutes before the start`)
        } else {
            let hourEarly = Math.floor(timeEarly / 60);
            let minutesEarly = timeEarly % 60;

            if (minutesEarly < 10) {
                console.log(`${hourEarly}:0${minutesEarly} hours before the start`);
            } else {
                console.log(`${hourEarly}:${minutesEarly} hours before the start`);
            }
        }
    } else {
        console.log('Late');

        let timeLate = arrivalTime - examTime;

        if (timeLate < 60) {
            console.log(`${timeLate} minutes after the start`)
        } else {

            let hoursLate = Math.floor(timeLate / 60);
            let minutesLate = timeLate % 60;

            if (minutesLate < 10) {
                console.log(`${hoursLate}:0${minutesLate} hours after the start`);
            } else {
                console.log(`${hoursLate}:${minutesLate} hours after the start`);
            }
        }
    }

}

onTimeForExam(9, 30, 9, 50);
onTimeForExam(9, 0, 8, 30);
onTimeForExam(16, 0, 15, 0);
onTimeForExam(9, 0, 10, 30);
onTimeForExam(14, 0, 13, 55);
onTimeForExam(11, 30, 8, 12);
onTimeForExam(10, 0, 10, 0);
onTimeForExam(11, 30, 10, 55);
onTimeForExam(11, 30, 12, 29);



