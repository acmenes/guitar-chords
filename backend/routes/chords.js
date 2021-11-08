"use strict";

const express = require("express");
const cors = require("cors");
const { ensureAdmin } = require("../middleware/auth");
const Chord = require("../models/chord");

const router = new express.Router({ mergeParams: true });

/** Get all the chords in the database */
router.get("/", cors({origin: '*'}), async function(req, res, next){
    const chords = await Chord.getAllChords();
    return res.json({ chords })
});

/** Get a single chord by its name */
router.get("/:chord_fullname", cors({origin: '*'}), async function(req, res, next){
    try{
        const chord = await Chord.getChord(req.params.chord_fullname)
        return res.json({ chord })
    } catch(err) {
        return next(err)
    }
});

/** Only admins can post new chords */
router.post("/", ensureAdmin, cors({origin: '*'}), async function(req, res, next){
    try{
        const chord = await Chord.addChord(req.body) 
        return res.json({ chord })
    } catch(err) {
        return next(err)
    }
});

module.exports = router;

/** test chord
 * 
 * {"chord_fullname":"f-major",
           "roots":"F",
           "qualities":"Major",
           "barres":"None",
           "capo":false,
           "frets":"1, 3, 3, 2, 1, 1",
           "fingers":"1, 3, 4, 2, 1, 1"}
 */