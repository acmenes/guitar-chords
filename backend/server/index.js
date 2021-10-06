// server file for app

const express = require("express");

const PORT = process.env.PORT || 3001;

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