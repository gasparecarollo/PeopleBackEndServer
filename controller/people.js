const express = require("express");
const peopleArr = require("../data/people");
const people = express.Router();

people.get("/people", (req, res) => {
    res.status(200).json(peopleArr);
})

people.get("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const person = people.find((person) =>
            person.id === Number(id));
        if (person) {
            res.status(200).json(person);
        } else {
            throw "Person could not be found";
        }
    } catch (error) {
        res.status(404).json({ error: error })
    }

    people.post("/people", (req, res) => {
        try {
            const person = req.body;
            person.id = peopleArr.length + 1;
            if (person.name && person.description) {
                peopleArr.push(person)
                res.status(201).json(peopleArr[peopleArr.length - 1]);
            }
        } catch (error) {
            res.status(400).json({ error: error })
        }

        people.delete("/:id", (req, res) => {
            try {
                const { id } = req.params;
                const index = peopleArr.findIndex((person) =>
                    person.id === Number(id));
                if (index !== -1) {
                    animesArr.splice(index, 1)
                    res.status(200).json(peopleArr);
                } else {
                    throw "Person could not be found"
                }
            } catch (error) {
                res.status(400).json({ error: error });
            }
        })
    })

    people.put("/:id", (req, res) => {
        try {

            const { id } = req.params;
            const person = req.body;
            const index = peopleArr.findIndex((person) => person.id === Number(id));
            if (index !== -1) {
                peopleArr.splice(index, 1, person);
                res.status(200).json(peopleArr);
            } else {
                throw "Could not update person";
            }
        } catch (error) {
            res.status(400).json({ error: error });
        }
    })
})



module.exports = people;