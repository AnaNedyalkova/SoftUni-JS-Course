function distanceBetweenPoints (x1, y1, x2, y2) {
    var a = x1 - x2;
    var b = y1 - y2;
    
    var c = Math.sqrt( a*a + b*b );

    console.log(c);
}
distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);