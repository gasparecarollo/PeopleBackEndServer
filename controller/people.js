const express = require("express");
const peopleArr = require("../data/people");
const people = express.Router();

people.get("/people", (req, res) => {
    res.status(200).json(peopleArr);
})



module.exports = people;