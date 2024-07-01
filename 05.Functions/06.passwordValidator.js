function passwordValidator(password) {

    function isValidLength(pass) {

        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        }

        console.log("Password must be between 6 and 10 characters");
        return false;
    }

    function isLettersAndDigitsOnly(pass) {

        const regex = /^[A-Za-z0-9]+$/;

        if (!pass.match(regex)) {
            console.log("Password must consist only of letters and digits");
            return false;
        }

        return true;
    }

    function isAtLeastTwoDigits(pass) {

        if (!/[0-9]{2,}/.test(password)) {
            console.log("Password must have at least 2 digits");
            return false;
        }
        
        return true;
    }

    let isValidChars = isValidLength(password);
    let isValidSymbols = isLettersAndDigitsOnly(password);
    let isValidDigits = isAtLeastTwoDigits(password);

    if (isValidChars && isValidSymbols && isValidDigits) {
        console.log("Password is valid");
    }

}

passwordValidator('pass');
passwordValidator('APass123');
passwordValidator('Pa$s$s');