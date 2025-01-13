function personalTitle (a,b) {
let age = Number(a);
let gender = b;

if (gender === "f") {
    if (age >= 16) {
        console.log("Ms.");
    } else {
        console.log ("Miss");
    }
} else if (gender === "m") {
    if (age >= 16) {
        console.log("Mr.")
    } else { 
        console.log ("Master") }
}
}
personalTitle(21, "f");
personalTitle(15, "m");
