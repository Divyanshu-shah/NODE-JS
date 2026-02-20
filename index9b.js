// http://localhost:8080/1234

// {
//     "token": 1234
// }

import express from "express";
const app = express();
app.use(express.json());
const logger = (req, res, next) => {
    const newuser = req.body;   
    if (newuser.token === 1234) {
        next();
    } else {
        res.send("Invalid Url");
    }
};
app.use(logger);
// app.get("/", (req, res) => {
//     res.send("Welcome");
// });
app.listen(8080, () => {
    console.log("Server started");
});