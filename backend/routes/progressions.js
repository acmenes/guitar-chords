"use strict";

const express = require("express");
const cors = require("cors");
const Progression = require("../models/progression");

const router = new express.Router({ mergeParams: true });

router.get("/", cors({origin: '*'}), async function(req, res, next){
    try{
        const progressions = await Progression.getAllProgressions();
        return res.json({ progressions })
    } catch (err) {
        return next(err)
    }
});

router.get("/:id", cors({origin: '*'}), async function(req, res, next){
    try{
        const progression = await Progression.getProgression(req.params.id);
        return res.json({ progression })
    } catch (err) {
        return next(err)
    }
})

module.exports = router;