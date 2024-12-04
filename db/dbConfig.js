const pgp = require('pg-promise')();
require('dotenv').config();

const [PG_HOST, PG_USER, PG_DATABASE, PG_PORT] = process.env;

const cn = {
    host: PG_HOST,
    user: PG_USER,
    database: PG_DATABASE,
    port: PG_PORT
}

const db = pgp(cn);


module.exports = db;

