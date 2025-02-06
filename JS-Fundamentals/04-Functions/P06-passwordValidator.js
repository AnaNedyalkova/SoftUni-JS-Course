// Password must be between 6 and 10 characters
// Password must consist only of letters and digits
// Password must have at least 2 digits

function passwordValidator(pass) {

    function checkValidLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log('Password must be between 6 and 10 characters');
            return false;
        }
    }

    function checkOnlyAlphanumeric(pass) {
        let pattern = /^[A-Za-z0-9]+$/;  //regEx to find in range, from Start to End to include only these

        if (pattern.test(pass)) {  // test the value of pass    
            return true;
        } else {
            console.log('Password must consist only of letters and digits');
            return false;
        }
    }

    function checkMinCountDigits(pass) {
        let pattern = /[0-9]{2,}/;  // two or more digits

        if (pattern.test(pass)) { //method .test
            return true;
        } else {
            console.log('Password must have at least 2 digits');
            return false;
        }
    }

    let isValidLength = checkValidLength(pass);
    let isAlphanumeriv = checkOnlyAlphanumeric(pass);
    let hasMin2Digits = checkMinCountDigits(pass);

    if(isAlphanumeriv && isAlphanumeriv && hasMin2Digits) {
        console.log('Password is valid');
    }

}
passwordValidator('Pa$s$s');