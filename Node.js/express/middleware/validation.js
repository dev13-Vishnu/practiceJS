
export default function Validation (req, res,next) {
    if (req.token) {
        console.log("Token approved");
        next();
        return
    }
    console.log("No token");
    res.send("<h1> No Auth</h1>");

}