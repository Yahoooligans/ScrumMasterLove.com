var pgp = require('pg-promise')();

const dbConfig = process.env.DATABASE_URL;

var db = pgp(dbConfig);

module.exports = db;