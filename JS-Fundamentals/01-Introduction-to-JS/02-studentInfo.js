function studentInfo (a, b, c) {
    let name = String(a);
    let age = Number(b);
    let averageGrade = Number(c);

    console.log(`Name: ${name}, Age: ${age}, Grade: ${averageGrade.toFixed(2)}`)

}
studentInfo ('John', 15, 5.54678);
studentInfo ('Steve', 16, 2.1426);
studentInfo ('Marry', 12, 6.00);