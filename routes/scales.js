"use strict";

const express = require("express");

const router = new express.Router({ mergeParams: true });

router.get("/", async function(req, res, next){
    return res.json({"scales": "scales"})
})

module.exports = router;