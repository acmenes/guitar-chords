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

router.get("/sample", async function(req, res, next){
    return res.json({
        key: 'C',
        suffix: 'Major',
        positions: [{
            frets: 'x32010',
            fingers: '032010',
            capo: false
        }],
    })
});

module.exports = router;