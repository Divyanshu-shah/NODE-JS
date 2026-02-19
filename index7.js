import express from 'express';
const app = express();
app.listen(8080);
app.get('/', (req, res) => {
    const user ={
        name: 'John',
        email: 'john@example.com',
        role: 'student'
    };
    res.json(user);
});
