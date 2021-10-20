"use strict";

const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

if (process.env.NODE_ENV === "production") {
    db = new Client({
      connectionString: getDatabaseUri(),
      ssl: {
        rejectUnauthorized: false
      }
    });
  } else {
    db = new Client({
      connectionString: getDatabaseUri()
    });
  }

let db;

db.connect();

module.exports = db;
