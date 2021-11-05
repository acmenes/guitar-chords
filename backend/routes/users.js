"use strict";

const express = require("express");
const User = require("../models/user");
const { BadRequestError } = require("../expressError");
const { ensureCorrectUserOrAdmin, ensureAdmin } = require("../middleware/auth");
const { createToken } = require("../helpers/tokens");
const router = new express.Router({ mergeParams: true });


/** Register a new user */
router.post("/", ensureAdmin, async function(req, res, next){
    try {
        const newUser = await User.register(req.body)
        const token = createToken(newUser);
        return res.json({ newUser })
    } catch(err) {
        return next(err)
    }
});

/** Admins are able to see a list of all users */
router.get("/", ensureCorrectUserOrAdmin, async function(req, res, next){
    try {
        const users = await User.findAll()
        return res.json({ users })
    } catch (err) {
       return next(err) 
    }
});

/** Only an admin or the user who owns that profile should be able to view a profile 
 * Get one user by their username */
router.get("/:username", ensureCorrectUserOrAdmin, async function(req, res, next){
    try{
        const user = await User.getUser(req.params.username)
        return res.json({ user })
    } catch (err) {
        return next(err)
    }
    
});

/** Only an admin or the correct user can edit their own profile */
router.patch("/:username", ensureCorrectUserOrAdmin, async function (req, res, next){
    try {
        return res.json({ "edited": "edited that user" })
    } catch(err) {
        return next(err)
    }
});

/** Only an admin or the correct user can delete a user */
router.delete(":/username", ensureCorrectUserOrAdmin, async function(req, res, next){
    try {
        await User.removeUser(req.params.username)
        return res.json({ deleted: req.params.username })
    } catch(err) {
        return next(err)
    }
});

/** List of a user's saved chords, everyone can view this */
router.get("/:username/chords", async function (req, res, next){
    try{
        const chordList = await User.getUserChords(req.params.username)
        return res.json({ chordList: chordList })
    } catch(err) {
        return next(err)
    }
});

/** Add a chord to a user's list, only admins or the correct user can do this */
router.post("/:username/chords/:chord_fullname", ensureCorrectUserOrAdmin, async function (req, res, next){
    try{
        const chord = req.params.chord_fullname
        await User.addChordToList(req.params.username, chord)
        return res.json({ added: chord })
    } catch(err) {
        return next(err)
    }
});

/** Have a user change the status on their chord from not done to done, can also be done by an admin*/
router.patch("/:username/chords/:chord_fullname", ensureCorrectUserOrAdmin, async function (req, res, next){
    try{
        const username = req.params.username;
        const chord = req.params.chord_fullname;
        await User.editUserChord(username, chord)
        return("Updated your chord")
    } catch(err) {
        return next(err)
    }
});

module.exports = router;