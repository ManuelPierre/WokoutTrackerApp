const express = require("express");
const mogojs = require("mongojs")
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const PORT = 3000;
const workout = require("./models/workoutModel.js");

// const db = require("/Develop/models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", { 
    useNewUrlParser: true, 
userFindAndModify: false});

// app.use(require("./routes/view-routes.js"));
    require ("./routes/api-routes.js")(app);
    require ("./routes/api-routes.js")(app);
    require("./routes/html-routes.js")(app);

    app.listen(3000, () => (
        console.log("app running on port 3000!") 
    ));

