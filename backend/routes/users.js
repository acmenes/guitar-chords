"use strict";

const express = require("express");

const router = new express.Router({ mergeParams: true });

router.get("/", async function(req, res, next){
    /// this should be an admin only route
    return res.json({ "users": "users"})
});

router.get("/:username", async function(req, res, next){
    /** Return the name of a user */
    return res.json({ "username": "username" })
});

router.patch("/:username", async function (req, res, next){
    /** Eding a user */
    /// this should be an admin or specific user function only
    return res.json({ "username": "username edited" })
});

router.delete(":/username", async function(req, res, next){
    /** Delete a user */
    return res.json({ "username" : "deleted that user"})
});

module.exports = router;