"use strict";

const express = require("express");

const router = new express.Router({ mergeParams: true });

router.get("/", async function(req, res, next){
    return res.json({"chords": "chords"})
});

/** this needs to be set up according to how the chords
are stored in the db */

router.get("/:chordname", async function(req, res, next){
    return res.json({"chord": "chord"})
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