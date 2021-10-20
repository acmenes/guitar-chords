"use strict";

/** Config file for application */

require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret_dev";

const PORT = +process.env.PORT || 3000;

function getDatabaseUri() {
    return (process.env.NODE_ENV === "test")
        ? "chords_db_test"
        : process.env.DATABASE_URL || "chords_db";
  }

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

module.exports = {
    SECRET_KEY,
    PORT,
    BCRYPT_WORK_FACTOR,
    getDatabaseUri,
}