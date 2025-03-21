class customError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Custom Error';
    }
}
try {
    throw new customError("Something went wrong");
} catch (error) {
    console.error("error name:",error.name);
    console.error("error message:",error.message);
    console.error("error.stack:",error.stack);
}