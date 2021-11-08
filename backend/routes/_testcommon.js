"use strict";

const db = require("../db.js")

/// list the models you want to test

const User = require("../models/user")
const Chord = require("../models/chord")

const { createToken } = require("../helpers/tokens");

async function commonBeforeAll() {
    await db.query("DELETE FROM USERS")

    await User.register({
        username: "u1",
        password: "testuser1"
    });

    await User.register({
        username: "u2",
        password: "testuser2"
    });

    await User.register({
        username: "testadmin",
        password: "admin"
    });

};

async function commonBeforeEach() {
    await db.query("BEGIN");
};

async function commonAfterAll() {
    await db.query("ROLLBACK");
};

async function commonAfterEach() {
    await db.end();
};

const u1Token = createToken({ username: "u1", isAdmin: false });
const u2Token = createToken({ username: "u2", isAdmin: false });
const adminToken = createToken({ username: "testadmin", isAdmin: true });

module.exports = {
    commonBeforeAll,
    commonBeforeEach,
    commonAfterEach,
    commonAfterAll,
    u1Token,
    u2Token,
    adminToken
  };