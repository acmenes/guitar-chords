"use strict";

const express = require("express");

const router = new express.Router({ mergeParams: true });

router.get("/", async function(req, res, next){
    return res.json({"chords": "chords"})
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