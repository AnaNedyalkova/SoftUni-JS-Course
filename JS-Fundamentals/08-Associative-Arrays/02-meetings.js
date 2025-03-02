function meetings(input) {
    let meetingsAssArr = {};

    for (let line of input) {
        let [day, name] = line.split(' ');

        if (meetingsAssArr.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            meetingsAssArr[day] = name;
            console.log(`Scheduled for ${day}`)
        }
    }

    for (let key in meetingsAssArr) {
        console.log(`${key} -> ${meetingsAssArr[key]}`)
    }
}
meetings(
    ['Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim'])