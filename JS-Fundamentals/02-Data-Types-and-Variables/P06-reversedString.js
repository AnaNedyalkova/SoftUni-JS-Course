function reversedString(str) {

    let result = "";

    //Reversed loop

    for ( let i = str.length - 1; i >= 0; i--) {
        let letter = str[i];
        result += letter;
    }
    console.log(result);


    //let reversedStr = str.splot('').reverse().join(''); One line solution

}
reversedString('Information');