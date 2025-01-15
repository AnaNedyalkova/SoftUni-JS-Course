function login(input) {

let username = input[0];
let password = username.split('').reverse().join('');

//split string in array of characters/ "cat" -> ["c", "a", "t"]
//reverse(works only with arrays) - array -> array with reversed elements ["c", "a", "t"] -> ["t". "a", "c"]
//join - aaray -> string ["t". "a". "c"] -> "tac"

let currentTry = 1;

for (let i = 1; i < input.length; i++) {
    let guessedPass = input[i];

    if (guessedPass === password) {
        console.log(`User ${username} logged in.`);
        break;
    } 
    if (currentTry === 4) {
        console.log(`User ${username} blocked!`);
        break;
    }

    console.log(`Incorrect password. Try again.`);

        currentTry++;
}
}
//login(['Acer','login','go','let me in','recA']);
//login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);
