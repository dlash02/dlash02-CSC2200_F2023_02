// Duplicate Code Example

function validateUsername(username) {
    // Check if the username is valid
    if (username && username.length >= 5 && username.length <= 15) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    // Check if the email is valid
    if (email && email.includes('@') && email.length <= 50) {
        return true;
    } else {
        return false;
    }
}

function validateUserClick( inUser ) {
    let oStr = `InValid User:${inUser}`;
    if (validateUsername(inUser)) {
        // Process the username
        oStr =`Valid username:${inUser}`;
    }
    document.getElementById('results1').innerText = oStr;
}
function validateEmailClick( inEmail ) {
    let oStr = `InValid Email:${inEmail}`;
    if (validateEmail(inEmail)) {
        oStr = `OK Valid Email:${inEmail}`;
    }
    document.getElementById('results2').innerText = oStr;

}

// Might rewrite the function to eliminate duplicate code
function validateField(value, minLength, maxLength, includeVal = null) {
    // Check if the value is valid based on length and additional checks
    let isValid = false;
    if (value && value.length >= minLength && value.length <= maxLength) {
        isValid = true;
    }
    if ( includeVal != null ) {
        if( value.includes(includeVal ) ) {
            isValid = true;
        } else {
            isValid = false;
        }
    }
    return isValid;
}
