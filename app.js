const express = require('express');
const app = express();
const peopleController = require("./controller/people")


app.get("/", (req, res) => {
    res.send("Welcome People to the Peep World!");
})

app.use("/people", peopleController)



module.exports = app;