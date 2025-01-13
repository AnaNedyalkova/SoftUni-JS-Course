function password(input) {
    let index = 0;

    let username = input[index];
    index++;

    let userPass = input[index];
    index++;

    let currentPass = input[index];
    index++;


    while (userPass !== currentPass) {
        currentPass = input[index];
        index++;

        if (userPass == currentPass) {
            console.log(`Welcome ${username}!`)
            break;
        }
    }
}
password(["Nakov", "1234", "Pass", "1324", "1234"]);
password(["Gosho", "secret", "secret"]);
