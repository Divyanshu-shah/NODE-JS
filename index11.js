// http://localhost:8080/images/1.jpg

import express from 'express';
const app = express();
app.listen(8080, () => {
    console.log("Server started");
});

// middleware

// app.use(express.static('public')); 
app.use('/images', express.static('images'));
// app.use('/public', express.static('public')); 

