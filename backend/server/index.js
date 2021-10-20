// server file for app

const express = require("express");

const { PORT } = require("../config");

const app = express();

const chordsRoutes = require("../routes/chords")
const scalesRoutes = require("../routes/scales")

app.use("/chords", chordsRoutes)
app.use("/scales", scalesRoutes)

app.get("/api", (req, res) => {
    res.json({ message: "Hello!"})
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});

module.exports = app;