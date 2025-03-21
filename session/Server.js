import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(
    session({
        secret:"mySecretKey",
        resave: false,
        saveUninitialized: true,
        cookie:{secure: false, maxAge: 60000} //1- minitue expiration
    })
);

app.get("/login", (req, res) => {
    req.session.user = {username: "JohnDoe"};
    res.send("User logged in session created!");
});

app.get("/dashboard",(req, res) => {
    if(req.session.user) {
        res.send(`Welcome, ${req.session.user.username}`);
    } else {
        res.send('please login first');

    }
})

app.get("/logout", (req,res)=> {
    req.session.destroy((err) => {
        if(err) {
            return res.send("Error logging out.");
        }
        res.clearCookie("connect.sid");
        res.send("Logged out successfully");
    });
});

const PORT = 3000;
app.listen(PORT,()=> console.log("Sever runnning on port 3000"));
