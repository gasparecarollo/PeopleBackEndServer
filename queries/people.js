const db = require("../db/dbConfig");

const getAllPeople = async () => {
    try {
        const getAllPeople = await db.any("SELECT * FROM people")
        return people;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllPeople
}