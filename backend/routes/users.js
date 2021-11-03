"use strict";

const express = require("express");
const User = require("../models/user");

const router = new express.Router({ mergeParams: true });

router.post("/", async function(req, res, next){
    // Register a new user

    try {
        const newUser = await User.register(req.body)
        // const token = createToken(newUser);
        return res.json({ newUser })
    } catch(err) {
        return next(err)
    }
});

router.get("/", async function(req, res, next){
    // Get a list of all users
    
    try {
        const users = await User.findAll()
        return res.json({ users })
    } catch (err) {
       return next(err) 
    }
});

router.get("/:username", async function(req, res, next){
    // Get one user by their username
    
    try{
        const user = await User.getUser(req.params.username)
        return res.json({ user })
    } catch (err) {
        return next(err)
    }
    
});

router.patch("/:username", async function (req, res, next){
    /** Eding a user */
    /// this should be an admin or specific user function only

    try {
        return res.json({ "edited": "edited that user" })
    } catch(err) {
        return next(err)
    }
});

router.delete(":/username", async function(req, res, next){
    /** Delete a user, should be the correct user or an admin */

    try {
        await User.removeUser(req.params.username)
        return res.json({ deleted: req.params.username })
    } catch(err) {
        return next(err)
    }
});

/** List of a user's saved chords */
router.get("/:username/chords", async function (req, res, next){
    try{
        const chordList = await User.getUserChords(req.params.username)
        return res.json({ chordList: chordList })
    } catch(err) {
        return next(err)
    }
});

/** Add a chord to a user's list */

router.post("/:username/chords/:chord_fullname", async function (req, res, next){
    try{
        const chord = req.params.chordname_fullname
        await User.addChordToList(req.params.username, chord)
        return res.json({ added: chord })
    } catch(err) {
        return next(err)
    }
});

/** Have a user edit their favorite chords */
router.patch("/:username/chords/:chord_fullname", async function (req, res, next){
    try{
        return("chord")
    } catch(err) {
        return next(err)
    }
});

module.exports = router;