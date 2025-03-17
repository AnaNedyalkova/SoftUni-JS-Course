// function printDNA(lengthDNA) {
//     let start = "ATCGTTAGGG";
//     let sequence = start.split("");
//     let counter = 0;
//     // depending on the last advise ensure the correct input type 
//     for (let j = 1; j <= Number(lengthDNA); j++) { 
//         let first = sequence[0];
//         let second = sequence[1];
//         let output = '';
//         //counter change the print structure
//         counter++;
//         if (counter === 1) {
//             output = `**${first}${second}**`          // **##**
//         } else if (counter === 2 || counter === 4) {
//             output = `*${first}--${second}*`          // *#--#*
//         } else if (counter === 3) {
//             output = `${first}----${second}`          // #----#
//         }
//         //resetting counter
//         counter === 4 ? counter = 0 : null;
//         //printing output
//         console.log(output);
//         //cut element from the start of array and put it to the end of the same array
//         for (let k = 1; k <= 2; k++) {
//             let firstShift = sequence.shift()
//             sequence.push(firstShift)
//         }
//     }

//     let num = 5;
//     function inc (value) {
//         value += 1;
//     }
//     inc(num)
//     console.log(num)
// }
// printDNA(10)


function solve(dates) {
 
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let validDate = [];
 
 
    while((validDate=pattern.exec(dates)) !== null) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
 

 
 
}
 
solve("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");