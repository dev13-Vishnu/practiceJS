export default function Token (req, res, next) {
    console.log("Creating Token...")
   //  setInterval(() => {
   //     const Token = "123";
   //     req.token = Token;
   //     next();


   //  },1000);
   req.token = true;
   next();
}