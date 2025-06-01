function pieceOfPie(arr, pie1, pie2) {

    let result = [];
    let started = false;

    for (let pie of arr) {
        if (pie == pie1) {
            started = true;
            result.push(pie);
        } else if ( pie == pie2){
            started = false;
            result.push(pie);
            break;
        } else if (started) {
            result.push(pie);
        }

    }
    return result;
}
console.log(pieceOfPie(['Pumpkin Pie',
 'Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie',
 'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'))



function piesV2 (pies, startFlavor, endFlavor) {

    const start = pies.indexOf(startFlavor);
    const end = pies.indexOf(endFlavor) + 1;
    const result = pies.slice(start, end);
    return result;
}

console.log(pieceOfPie(['Pumpkin Pie',
 'Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie',
 'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'))