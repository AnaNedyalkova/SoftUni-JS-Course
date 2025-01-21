function cone(radius, height) {

    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3; // V = (1/3)πr2h

    console.log(`volume = ${volume.toFixed(4)}`);


    let area = Math.PI * radius * (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2))); //A = L + B = πrs + πr2 = πr(s + r) = πr(r + √(r2 + h2))
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5);
