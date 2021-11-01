"use strict";

const express = require("express");
const cors = require("cors");
const Chord = require("../models/chord");

const router = new express.Router({ mergeParams: true });

router.get("/", cors({origin: '*'}), async function(req, res, next){
    const chords = await Chord.getAllChords();
    return res.json({ chords })
});

/** this needs to be set up according to how the chords
are stored in the db */

router.get("/:chord_fullname", cors({origin: '*'}), async function(req, res, next){
    try{
        const chord = await Chord.getChord(req.params.chord_fullname)
        return res.json({ chord })
    } catch(err) {
        return next(err)
    }
});

router.post("/", cors({origin: '*'}), async function(req, res, next){
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