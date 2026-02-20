import express from "express";
const app = express();

app.listen(8080, () => {
    console.log("Server started on port 8080");
});

app.get("/:id", (req, res) => {
    if (req.params.id === "1234") {
        res.send("Welcome");
    } else {
        res.send("Access Denied");
    }
});