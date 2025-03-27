function fancyBarcodes(arr) {
    let pattern = /(@)(#+)(?<code>[A-Z][A-Za-z0-9]{4,}[A-Z])\1(#+)/g;
    let n = Number(arr.shift());
    let validCodes = [];

    for (let barcode of arr) {

        if (barcode.match(pattern)) {

            validCodes.push(barcode);
            let digits = barcode.match(/\d/g);
            let concatDigits = '';

            if (digits == null) {
                console.log(`Product group: 00`);
            } else {
                for (let digit of digits) {
                    concatDigits += digit;
                }
                console.log(`Product group: ${concatDigits}`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    }

}
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);