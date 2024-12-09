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

const updateOnePerson = async (id, anime) => {
    const { name, description } = person;
    try {
        const updatedPerson = await db.one("UPDATE people SET name=$1, description=$2 WHERE id=$3 RETURNING *", [name, description, id]);
        return updatedPerson;
    } catch (error) {
        return error;
    }
};

const deleteOnePerson = async (personId) => {
    try {
        const deletedPerson = await db.one("DELETE FROM people WHERE id=$1 RETURNING *", personId);
        return deletedPerson;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllPeople,
    getOnePerson,
    createOnePerson,
    updateOnePerson,
    deleteOnePerson
}