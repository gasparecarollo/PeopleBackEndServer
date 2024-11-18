const express = require('express');
const app = express();
const peopleController = require("./controller/people")


app.get("/", (req, res) => {
    res.send("Welcome People to the Peep World!");
})

app.use("/people", peopleController)

app.get("*", (req, res) => {
    res.status(404).send("The request you are looking for does not exist");
})

module.exports = app;