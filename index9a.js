import express from "express";
const app = express();
const token = Math.round(Math.random() * 100000 ).toString()
app.use(express.json());
const auth = (req, res, next) => {
    const val = req.headers.authorization
    const tokenValue = val.split(" ")
    if(tokenValue[1] === token) next()
    else res.send("unauthrized")
};
app.get("/", auth,(req, res) => {
    res.send("Welcome");
});
app.post("/login", (req, res) => {
    res.send(token)
})
app.listen(8080, () => {
  console.log("server is live");
});































// postman

// /login

// {
//     email:"john@gmail.com",
//     password:"12345"
// }


// import express from "express";
// const app = express();

// app.listen(8080, () => {
//     console.log("Server started");
// });

// app.get("/:id", (req, res) => {
//     if (req.params.id === "1234") {
//         res.send("Welcome");
//     } else {
//         res.send("Access Denied");
//     }
// });




// http://localhost:8080/1234

// {
//     "token": 1234
// }

// import express from "express";
// const app = express();
// app.use(express.json());
// const logger = (req, res, next) => {
//     const newuser = req.body;   
//     if (newuser.token === 1234) {
//         next();
//     } else {
//         res.send("Invalid Url");
//     }
// };
// app.use(logger);
// app.get("/", (req, res) => {
//     res.send("Welcome");
// });
// app.listen(8080, () => {
//     console.log("Server started");
// });




// import express from 'express';
// const app = express();
// app.use(express.json());
// const auth = (req, res, next) => {
//     const token = req.headers.authorization;
//     const val=token.split(" ");
//     if(Val[1] === token){
//         next();
//     } else {
//         res.send("Denied");
//     }
// };
// app.post("/login", (req, res) => {
//     res.send("Login Success");
// });


// import express from "express";
// const app = express();
// app.use(express.json());
// const jwt = Math.round(Math.random() * 10000).toString();
// const auth = (req, res, next) => {
//     const token = req.headers.authorization;
//     const val = token.split(" ");
//     if (val[1] === jwt) {
//         next();
//     } else {
//         res.send("Denied");
//     }
// };
// app.get("/", auth, (req, res) => {
//     res.send("Welcome");
// });
// app.post("/login", (req, res) => {
//     res.send(token);
// });
// app.listen(8080, () => {
//     console.log("Server started");
// });
