const db = require("../db/dbConfig");

const getAllPeople = async () => {
    try {
        const getAllPeople = await db.any("SELECT * FROM people")
        return people;
    } catch (error) {
        return error;
    }
};
const getOnePerson = async (personId) => {
    try {
        const person = await db.one("SELECT * FROM people WHERE id=$1", personId);
    } catch (error) {
        return error;
    }
};

const createOnePerson = async ({ name, description }) => {
    try {
        const newPerson = await db.one("SELECT * FROM people (name, description) VALUES ($1, $2) RETURNING *", [name, description])
        return newPerson;
    } catch (error) {
        return error;
    }
};


module.exports = {
    getAllPeople,
    getOnePerson,
    createOnePerson
}