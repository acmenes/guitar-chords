// server file for app

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { PORT } = require("../config");

const app = express();

const { authenticateJWT } = require("../middleware/auth");

const { NotFoundError } = require("../expressError");

const chordsRoutes = require("../routes/chords")
const scalesRoutes = require("../routes/scales")
const usersRoutes = require("../routes/users")
const authRoutes = require("../routes/auth")
const progressionRoutes = require("../routes/progressions")

const REACT_APP_URL = "http://localhost:3000"

const corsOptions = {
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(morgan("tiny"));
app.use(authenticateJWT); 

app.use("/chords", chordsRoutes)
app.use("/scales", scalesRoutes)
app.use("/users", usersRoutes)
app.use("/auth", authRoutes)
app.use("/progressions", progressionRoutes)

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', REACT_APP_URL);

//   // Request methods you wish to allow
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.header('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });

app.use(function (req, res, next) {
    return next(new NotFoundError());
  });

app.get('/', cors(), function (req, res, next){
  res.set('Access-Control-Allow-Origin', '*');
  res.send({ "msg": "This has CORS enabled" })
});
 
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});

module.exports = app;