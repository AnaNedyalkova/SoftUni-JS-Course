function areaOfFugures(arg1, arg2, arg3) {
    let type = arg1;
    let area = 0;

    if (type === "square") {
        let a = Number(arg2);
        area = a*a;
    } else if (type === "rectangle") {
        let a = Number(arg2);
        let b = Number(arg3);
        area = a*b;
    } else if (type === "circle") {
        let r = Number(arg2);
        area = Math.PI * Math.pow(r,2);
    } else {
        let a = Number(arg2);
        let h =Number(arg3);
        area = a * h / 2;
        }
        console.log(area.toFixed(3));
 }

areaOfFugures("triangle", 5, 3.5);