class AuthenticationError extends Error {
    constructor(message) {
        super(message) ;
        this.name = "AuthenticationError";
    }
}

function login(username, passoword){
    const correctPassword = "secret123";

    if(passoword !== correctPassword){
        throw new AuthenticationError("incorrect password")
    }
    return "Loging successful";
}

try {
    login("user","wrong password");
} catch (error) {
    console.error(error.name, error.message);
}