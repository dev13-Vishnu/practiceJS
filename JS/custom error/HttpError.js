class HttpError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}

function fetchData(url) {
    if(url !== "https://api.example.com"){
        throw new HttpError(404, "Resources not found");
    }
    return { data: "Sample data"};
}
try {
    fetchData("worng-url"); 
} catch (error) {
    console.error(`Error ${error.statusCode}: ${error.message}`);
}