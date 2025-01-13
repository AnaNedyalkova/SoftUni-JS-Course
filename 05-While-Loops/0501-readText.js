function readText (input) {
    let index = 0;
    let text = input[index];
    index++;  // it there because you will read 0 index twice if it;s not there

    while (true) {
        if (text === "Stop") {
            break;
        }
        console.log(text);
        text = input[index];
        index++;
    }

}
//readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);