// import express from 'express';
// const app = express();
// app.listen(8080);
// app.get("/name/:name", (req, res) => {
//   res.send(`Hello ${req.params.name}`);
// });

// http://localhost:8080/name/John


// http://localhost:8080/?name=John&age=21

import express from 'express';
const app = express();
app.listen(8080);
app.get("/", (req, res) => {
  res.send("hello"+req.params.name+req.params.age);
});
