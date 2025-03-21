function isValid(password) {
    const lengthValid = password.length > 8;
    const upperCaseValid = /[A-Z]/.test(password);
    const lowerCaseValid = /[a-z]/.test(password);
    const digitValid = /\d/.test(password);
    const specialCharValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return lengthValid&& upperCaseValid&& lowerCaseValid && digitValid&&specialCharValid
}

console.log(isValid("redBulb6"))